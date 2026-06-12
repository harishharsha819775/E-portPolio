'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
  type: 'dot' | 'star' | 'ring';
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let mouse = { x: -9999, y: -9999 };
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const colors = ['#FF1493', '#FF69B4', '#FF66CC', '#D8B4FE', '#C084FC'];
    const particles: Particle[] = [];

    for (let i = 0; i < 180; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.8 ? 'ring' : 'dot',
      });
    }

    // Floating spheres
    const spheres = Array.from({ length: 8 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 80 + 40,
      speed: Math.random() * 0.003 + 0.001,
      offset: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;

      // Draw floating glowing spheres
      spheres.forEach(s => {
        s.y += Math.sin(t * s.speed * 100 + s.offset) * 0.3;
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
        grd.addColorStop(0, s.color.replace(')', ',0.08)').replace('rgb', 'rgba'));
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });

      // Neural connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,20,147,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Particles
      particles.forEach(p => {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx += (dx / dist) * force * 0.5;
          p.vy += (dy / dist) * force * 0.5;
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const pulse = 0.5 + 0.5 * Math.sin(t * 2 + p.x * 0.01);
        const finalAlpha = p.alpha * pulse;

        if (p.type === 'ring') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          ctx.strokeStyle = p.color.replace(')', `,${finalAlpha * 0.4})`).replace('#', 'rgba(').replace('FF1493', '255,20,147').replace('FF69B4', '255,105,180').replace('FF66CC', '255,102,204').replace('D8B4FE', '216,180,254').replace('C084FC', '192,132,252');
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius + 2);
        grd.addColorStop(0, p.color + 'ff');
        grd.addColorStop(1, p.color + '00');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.globalAlpha = finalAlpha;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
