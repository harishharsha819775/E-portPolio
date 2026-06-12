'use client';
import { useEffect, useRef } from 'react';

export default function LoadingScreen({ loading }: { loading: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
      });
    }

    let animId: number;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.02;

      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255,20,147,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 4);
        grd.addColorStop(0, 'rgba(255,20,147,0.9)');
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      className={`loading-screen ${!loading ? 'hidden' : ''}`}
      style={{ transition: 'opacity 0.8s ease, visibility 0.8s ease' }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '2rem',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #FF1493, #FF69B4, #D8B4FE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '24px',
            letterSpacing: '4px',
          }}
        >
          HPC
        </div>

        {/* Animated ring loader */}
        <div style={{ position: 'relative', width: 80, height: 80, margin: '0 auto 24px' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '3px solid rgba(255,20,147,0.15)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '3px solid transparent',
              borderTopColor: '#FF1493',
              borderRightColor: '#FF69B4',
              animation: 'rotate-slow 1s linear infinite',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 10,
              borderRadius: '50%',
              border: '2px solid transparent',
              borderTopColor: '#D8B4FE',
              animation: 'rotate-slow 1.5s linear infinite reverse',
            }}
          />
        </div>

        <p
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            color: 'rgba(255,105,180,0.8)',
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          Initializing AI Portfolio...
        </p>
      </div>
    </div>
  );
}
