'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const typingWords = [
  'AI Engineer',
  'Full Stack Developer',
  'Python Programmer',
  'Problem Solver',
  'Future Innovator',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typing animation
  useEffect(() => {
    const current = typingWords[wordIndex];
    const speed = deleting ? 50 : 100;
    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (deleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setWordIndex(w => (w + 1) % typingWords.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  // Hero canvas — glowing moon + rings
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let t = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.008;
      const cx = canvas.width * 0.5;
      const cy = canvas.height * 0.42;

      // Outer glow atmosphere
      const atmo = ctx.createRadialGradient(cx, cy, 0, cx, cy, 320);
      atmo.addColorStop(0, 'rgba(255,20,147,0.08)');
      atmo.addColorStop(0.5, 'rgba(216,180,254,0.05)');
      atmo.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, 320, 0, Math.PI * 2);
      ctx.fillStyle = atmo;
      ctx.fill();

      // Moon glow
      const moonGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
      moonGlow.addColorStop(0, 'rgba(255,20,147,0.15)');
      moonGlow.addColorStop(0.6, 'rgba(255,105,180,0.07)');
      moonGlow.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, 180, 0, Math.PI * 2);
      ctx.fillStyle = moonGlow;
      ctx.fill();

      // Moon core
      const moonCore = ctx.createRadialGradient(cx - 20, cy - 20, 10, cx, cy, 90);
      moonCore.addColorStop(0, 'rgba(255,102,204,0.35)');
      moonCore.addColorStop(0.5, 'rgba(255,20,147,0.2)');
      moonCore.addColorStop(1, 'rgba(26,8,38,0.6)');
      ctx.beginPath();
      ctx.arc(cx, cy, 90, 0, Math.PI * 2);
      ctx.fillStyle = moonCore;
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,20,147,0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Rotating neon rings
      const rings = [
        { r: 130, speed: 0.003, dash: [12, 8], color: 'rgba(255,20,147,0.5)' },
        { r: 165, speed: -0.005, dash: [6, 14], color: 'rgba(216,180,254,0.35)' },
        { r: 200, speed: 0.002, dash: [20, 5], color: 'rgba(255,105,180,0.25)' },
        { r: 250, speed: -0.003, dash: [3, 20], color: 'rgba(192,132,252,0.2)' },
      ];

      rings.forEach(ring => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * ring.speed * 100);
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = 1.5;
        ctx.setLineDash(ring.dash);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // Orbiting dots
      const orbitDots = [
        { dist: 130, speed: 0.7, size: 5, color: '#FF1493' },
        { dist: 165, speed: -0.5, size: 4, color: '#D8B4FE' },
        { dist: 200, speed: 0.3, size: 3, color: '#FF69B4' },
      ];
      orbitDots.forEach(dot => {
        const angle = t * dot.speed;
        const dx = cx + dot.dist * Math.cos(angle);
        const dy = cy + dot.dist * Math.sin(angle);
        const grd = ctx.createRadialGradient(dx, dy, 0, dx, dy, dot.size * 3);
        grd.addColorStop(0, dot.color);
        grd.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(dx, dy, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.shadowColor = dot.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Floating particles
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2 + t * 0.1;
        const dist = 260 + Math.sin(t * 0.5 + i) * 40;
        const px = cx + dist * Math.cos(angle);
        const py = cy + dist * Math.sin(angle);
        const alpha = 0.2 + 0.3 * Math.sin(t + i * 0.5);
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,20,147,${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
        paddingBottom: 60,
      }}
    >
      {/* Hero canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Background gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(255,20,147,0.05) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(216,180,254,0.05) 0%, transparent 50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left — Text Content */}
          <div style={{ animation: 'slide-up 0.8s ease-out' }}>
            {/* Status badge */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
              <span className="hero-badge">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#4ade80',
                    display: 'inline-block',
                    boxShadow: '0 0 8px #4ade80',
                    animation: 'pulse-dot 1.5s ease-in-out infinite',
                  }}
                />
                Available for Opportunities
              </span>
            </div>

            {/* Main heading */}
            <div
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                color: 'rgba(255,105,180,0.8)',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Hello, I'm
            </div>
            <h1
              className="gradient-text"
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: 20,
                letterSpacing: '-1px',
              }}
            >
              HARISHA P C
            </h1>

            {/* Typing animation */}
            <div
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: 600,
                color: '#D8B4FE',
                marginBottom: 24,
                minHeight: 40,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>〈</span>
              <span style={{ color: '#FF69B4' }}>{typedText}</span>
              <span
                style={{
                  width: 2,
                  height: '1.2em',
                  background: '#FF1493',
                  display: 'inline-block',
                  animation: 'blink 1s step-end infinite',
                  boxShadow: '0 0 8px #FF1493',
                }}
              />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>〉</span>
            </div>

            {/* Education badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
              <div
                className="glass"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 18px',
                  borderRadius: 12,
                  width: 'fit-content',
                }}
              >
                <span style={{ fontSize: 20 }}>🎓</span>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 14, color: '#FF69B4' }}>
                    REVA University
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                    AI Engineering Student · 2025–2028
                  </div>
                </div>
              </div>
              <div
                className="glass"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 18px',
                  borderRadius: 12,
                  width: 'fit-content',
                }}
              >
                <span style={{ fontSize: 20 }}>⚡</span>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: 14, color: '#D8B4FE' }}>
                    NxtWave CCBP 4.0 Academy
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                    Full Stack Development Fellow
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              Building Intelligent Solutions with{' '}
              <span style={{ color: '#FF69B4', fontWeight: 600 }}>Code</span>,{' '}
              <span style={{ color: '#D8B4FE', fontWeight: 600 }}>Creativity</span>, and{' '}
              <span style={{ color: '#FF1493', fontWeight: 600 }}>Artificial Intelligence</span>.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button
                className="btn-solid"
                onClick={() => scrollToSection('projects')}
                id="hero-view-projects"
              >
                <span>🚀</span> <span>View Projects</span>
              </button>
              <a
                href="/resume.pdf"
                download
                className="btn-glow"
                id="hero-download-resume"
              >
                <span>⬇</span> <span>Download Resume</span>
              </a>
              <button
                className="btn-glow"
                onClick={() => scrollToSection('contact')}
                id="hero-contact"
                style={{ borderColor: '#D8B4FE', color: '#D8B4FE' }}
              >
                <span>✉</span> <span>Contact Me</span>
              </button>
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'slide-in-right 0.8s ease-out',
            }}
          >
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              {/* Floating rings behind photo */}
              {[220, 280, 340].map((size, i) => (
                <div
                  key={i}
                  className="floating-ring"
                  style={{
                    width: size,
                    height: size,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${i * 1.2}s`,
                    animationDuration: `${5 + i}s`,
                    borderColor: i === 1 ? 'rgba(216,180,254,0.2)' : 'rgba(255,20,147,0.2)',
                  }}
                />
              ))}

              {/* Profile photo */}
              <div className="profile-photo-wrapper">
                <img
                  src="/profile.jpg"
                  alt="Harisha P C"
                  className="profile-photo"
                  onError={e => {
                    // Fallback avatar
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.style.cssText = `
                        position: relative; z-index: 1; width: 100%; height: 100%;
                        border-radius: 50%; display: flex; align-items: center;
                        justify-content: center; font-size: 80px;
                        background: linear-gradient(135deg, rgba(255,20,147,0.2), rgba(216,180,254,0.2));
                        border: 4px solid #0D0118;
                      `;
                      fallback.textContent = '👨‍💻';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Floating skill chips */}
              {[
                { label: 'Python', emoji: '🐍', top: '5%', left: '-15%', delay: '0s' },
                { label: 'React', emoji: '⚛️', top: '20%', right: '-18%', delay: '0.5s' },
                { label: 'AI/ML', emoji: '🤖', bottom: '20%', left: '-18%', delay: '1s' },
                { label: 'REVA', emoji: '🎓', bottom: '5%', right: '-12%', delay: '1.5s' },
              ].map((chip, i) => (
                <div
                  key={i}
                  className="glass"
                  style={{
                    position: 'absolute',
                    padding: '8px 14px',
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: '#FF69B4',
                    animation: `float 4s ease-in-out ${chip.delay} infinite`,
                    whiteSpace: 'nowrap',
                    top: chip.top,
                    bottom: (chip as any).bottom,
                    left: chip.left,
                    right: (chip as any).right,
                    zIndex: 3,
                  }}
                >
                  <span>{chip.emoji}</span>
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="scroll-indicator"
        onClick={() => scrollToSection('about')}
        id="scroll-indicator"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span style={{ fontSize: 11, color: 'rgba(255,20,147,0.6)', letterSpacing: 2, textTransform: 'uppercase' }}>
          Scroll
        </span>
      </div>
    </section>
  );
}
