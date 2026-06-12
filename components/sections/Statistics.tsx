'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Projects Completed', value: 10, suffix: '+', icon: '🚀', color: '#FF1493' },
  { label: 'Coding Hours', value: 500, suffix: '+', icon: '⌨️', color: '#D8B4FE' },
  { label: 'Certifications Earned', value: 5, suffix: '+', icon: '🏆', color: '#FF69B4' },
  { label: 'Skills Mastered', value: 12, suffix: '+', icon: '🧠', color: '#FF66CC' },
];

function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatCard({ stat, started }: { stat: typeof stats[0]; started: boolean }) {
  const count = useCountUp(stat.value, 2000, started);
  return (
    <div
      className="glass-card"
      style={{ padding: '36px 28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${stat.color}15, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <div style={{ fontSize: 40, marginBottom: 16 }}>{stat.icon}</div>
      <div
        style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 900,
          background: `linear-gradient(135deg, ${stat.color}, #D8B4FE)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {count}{stat.suffix}
      </div>
      <p
        style={{
          fontFamily: 'Space Grotesk',
          fontSize: 14,
          color: 'rgba(255,255,255,0.55)',
          fontWeight: 500,
          letterSpacing: 1,
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStarted(true);
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, rgba(255,20,147,0.04) 0%, transparent 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'Orbitron',
          fontSize: 'clamp(80px, 15vw, 160px)',
          fontWeight: 900,
          color: 'rgba(255,20,147,0.03)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}
      >
        STATS
      </div>

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // STATISTICS
          </p>
          <h2 className="section-heading gradient-text">Numbers That Matter</h2>
          <div className="section-line" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
              <StatCard stat={stat} started={started} />
            </div>
          ))}
        </div>

        {/* Bottom motivational text */}
        <div
          className="animate-on-scroll"
          style={{ textAlign: 'center', marginTop: 60 }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'rgba(255,20,147,0.08)',
              border: '1px solid rgba(255,20,147,0.2)',
              borderRadius: 50,
              fontFamily: 'Space Grotesk',
              fontSize: 15,
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
            }}
          >
            🌱 Every day is an opportunity to learn something new and build something amazing
          </div>
        </div>
      </div>
    </section>
  );
}
