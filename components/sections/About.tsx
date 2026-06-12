'use client';
import { useEffect, useRef } from 'react';

const personalInfo = [
  { label: 'Name', value: 'Harisha P C', icon: '👤' },
  { label: 'Location', value: 'Bengaluru, Karnataka, India', icon: '📍' },
  { label: 'Degree', value: 'Bachelor of Engineering (B.E.)', icon: '🎓' },
  { label: 'Branch', value: 'Artificial Intelligence', icon: '🤖' },
  { label: 'University', value: 'REVA University', icon: '🏫' },
  { label: 'Duration', value: '2025 – 2028', icon: '📅' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
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
    <section id="about" ref={sectionRef} style={{ padding: '100px 0' }}>
      <div className="section-wrapper">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // ABOUT ME
          </p>
          <h2 className="section-heading gradient-text">Know Who I Am</h2>
          <div className="section-line" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Left — Profile card */}
          <div className="animate-on-scroll from-left">
            <div className="holo-border">
              <div className="holo-border-inner holo-scan" style={{ position: 'relative', overflow: 'hidden' }}>
                {/* Photo */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                  <div
                    style={{
                      position: 'relative',
                      width: 150,
                      height: 150,
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: -3,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #FF1493, #D8B4FE, #FF66CC)',
                        backgroundSize: '300%',
                        animation: 'gradient-shift 3s ease infinite',
                      }}
                    />
                    <img
                      src="/profile.jpg"
                      alt="Harisha P C"
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        width: 150,
                        height: 150,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        border: '4px solid #0D0118',
                        display: 'block',
                      }}
                      onError={e => {
                        const t = e.target as HTMLImageElement;
                        t.style.display = 'none';
                        const parent = t.parentElement;
                        if (parent) {
                          const fb = document.createElement('div');
                          fb.style.cssText = 'position:relative;z-index:1;width:150px;height:150px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:60px;background:linear-gradient(135deg,rgba(255,20,147,0.2),rgba(216,180,254,0.2));border:4px solid #0D0118;';
                          fb.textContent = '👨‍💻';
                          parent.appendChild(fb);
                        }
                      }}
                    />
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    textAlign: 'center',
                    marginBottom: 6,
                    background: 'linear-gradient(135deg, #FF1493, #D8B4FE)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Harisha P C
                </h3>
                <p
                  style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14,
                    marginBottom: 28,
                    fontFamily: 'Space Grotesk',
                  }}
                >
                  AI Engineer · Full Stack Developer
                </p>

                {/* Personal Info Grid */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {personalInfo.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        padding: '10px 14px',
                        background: 'rgba(255,20,147,0.05)',
                        borderRadius: 10,
                        border: '1px solid rgba(255,20,147,0.12)',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,20,147,0.4)';
                        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,20,147,0.1)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,20,147,0.12)';
                        (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,20,147,0.05)';
                      }}
                    >
                      <span style={{ fontSize: 16, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: 11, color: '#FF1493', letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Orbitron', marginBottom: 2 }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontFamily: 'Inter', fontWeight: 500 }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — About text */}
          <div className="animate-on-scroll from-right" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div
              style={{
                fontFamily: 'Inter',
                fontSize: 16,
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.85,
              }}
            >
              <p style={{ marginBottom: 20 }}>
                Hello! I'm{' '}
                <span className="neon-text-soft" style={{ fontWeight: 700 }}>Harisha P C</span>, a passionate{' '}
                <span style={{ color: '#D8B4FE', fontWeight: 600 }}>Artificial Intelligence Engineering</span> student at{' '}
                <span style={{ color: '#FF1493', fontWeight: 600 }}>REVA University (2025–2028)</span> and a{' '}
                <span style={{ color: '#FF69B4', fontWeight: 600 }}>Full-Stack Development</span> learner at{' '}
                <span style={{ color: '#D8B4FE', fontWeight: 600 }}>NxtWave CCBP 4.0 Academy</span>.
              </p>
              <p>
                I enjoy building innovative web applications, solving coding challenges, and exploring emerging technologies in{' '}
                <span style={{ color: '#FF69B4', fontWeight: 600 }}>Artificial Intelligence</span>,{' '}
                <span style={{ color: '#D8B4FE', fontWeight: 600 }}>Data Science</span>, and{' '}
                <span style={{ color: '#FF66CC', fontWeight: 600 }}>Software Development</span>. My goal is to create impactful digital solutions and contribute to the future of technology through continuous learning and hands-on projects.
              </p>
            </div>

            {/* Quote */}
            <div
              className="glass"
              style={{
                padding: '20px 24px',
                borderLeft: '4px solid #FF1493',
                borderRadius: '0 16px 16px 0',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              <p style={{ fontFamily: 'Space Grotesk', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.7 }}>
                "Building Intelligent Solutions with Code, Creativity, and Artificial Intelligence."
              </p>
              <p style={{ color: '#FF1493', fontSize: 13, marginTop: 8, fontWeight: 600 }}>— Harisha P C</p>
            </div>

            {/* Quick stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {[
                { num: '10+', label: 'Projects' },
                { num: '500+', label: 'Coding Hours' },
                { num: '5+', label: 'Certifications' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{ padding: '20px 16px', textAlign: 'center' }}
                >
                  <div className="stat-number" style={{ fontSize: '2rem', marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk', letterSpacing: 1 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://github.com/harishharsha819775" target="_blank" rel="noopener noreferrer" className="social-icon" id="about-github">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://linkedin.com/in/harishharsha" target="_blank" rel="noopener noreferrer" className="social-icon" id="about-linkedin">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:hqrishhari@gmail.com" className="social-icon" id="about-email">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
