'use client';
import { useEffect, useRef } from 'react';

const timeline = [
  {
    period: '2025 – 2028',
    title: 'Bachelor of Engineering (B.E.)',
    subtitle: 'Artificial Intelligence',
    institution: 'REVA University',
    location: 'Bengaluru, Karnataka',
    description: 'Pursuing B.E. in Artificial Intelligence, exploring the frontiers of machine learning, deep learning, computer vision, NLP, and intelligent systems development.',
    icon: '🎓',
    tags: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
    color: '#FF1493',
  },
  {
    period: 'Ongoing',
    title: 'Full Stack Development Program',
    subtitle: 'Industry Ready Certification',
    institution: 'NxtWave CCBP 4.0 Academy',
    location: 'Online · Industry Program',
    description: 'Intensive full-stack development training covering HTML, CSS, JavaScript, React.js, Node.js, SQL, and industry best practices through hands-on projects.',
    icon: '⚡',
    tags: ['React.js', 'Node.js', 'JavaScript', 'Full Stack'],
    color: '#D8B4FE',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" ref={sectionRef} style={{ padding: '100px 0', background: 'rgba(216,180,254,0.02)' }}>
      <div className="section-wrapper">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // EDUCATION
          </p>
          <h2 className="section-heading gradient-text">Academic Journey</h2>
          <div className="section-line" />
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          {/* Vertical spine */}
          <div
            style={{
              position: 'absolute',
              left: 28,
              top: 60,
              bottom: 60,
              width: 2,
              background: 'linear-gradient(180deg, #FF1493, #D8B4FE, #FF1493)',
              boxShadow: '0 0 10px rgba(255,20,147,0.5)',
              borderRadius: 2,
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {timeline.map((entry, i) => (
              <div
                key={i}
                className="animate-on-scroll"
                style={{ paddingLeft: 72, position: 'relative' }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: 18,
                    top: 28,
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: '#0D0118',
                    border: `3px solid ${entry.color}`,
                    boxShadow: `0 0 15px ${entry.color}, 0 0 30px ${entry.color}40`,
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: entry.color,
                      animation: 'pulse-dot 2s ease-in-out infinite',
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="glass-card"
                  style={{ padding: '28px 32px', position: 'relative', overflow: 'hidden' }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${entry.color}, transparent)`,
                    }}
                  />

                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      {/* Icon */}
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: 14,
                          background: `linear-gradient(135deg, ${entry.color}30, ${entry.color}10)`,
                          border: `1px solid ${entry.color}40`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 26,
                          flexShrink: 0,
                        }}
                      >
                        {entry.icon}
                      </div>
                      <div>
                        <h3
                          style={{
                            fontFamily: 'Orbitron, monospace',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: 'white',
                            marginBottom: 4,
                          }}
                        >
                          {entry.title}
                        </h3>
                        <p style={{ color: entry.color, fontSize: 14, fontWeight: 600, fontFamily: 'Space Grotesk' }}>
                          {entry.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Period badge */}
                    <div
                      style={{
                        padding: '6px 16px',
                        background: `${entry.color}15`,
                        border: `1px solid ${entry.color}40`,
                        borderRadius: 50,
                        fontSize: 13,
                        color: entry.color,
                        fontWeight: 600,
                        fontFamily: 'Orbitron',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {entry.period}
                    </div>
                  </div>

                  <div style={{ marginBottom: 12 }}>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.9)',
                        fontFamily: 'Space Grotesk',
                        marginBottom: 2,
                      }}
                    >
                      {entry.institution}
                    </p>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter' }}>
                      📍 {entry.location}
                    </p>
                  </div>

                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, fontFamily: 'Inter', marginBottom: 16 }}>
                    {entry.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {entry.tags.map((tag, j) => (
                      <span key={j} className="tech-badge" style={{ borderColor: `${entry.color}40`, color: entry.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
