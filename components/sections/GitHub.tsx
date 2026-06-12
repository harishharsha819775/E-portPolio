'use client';
import { useEffect, useRef } from 'react';

const repos = [
  { name: 'exam-result-dashboard', description: 'Python + Streamlit data analysis dashboard for exam results', stars: 12, forks: 3, lang: 'Python', langColor: '#3776AB' },
  { name: 'student-management-system', description: 'Full-featured student management CRUD application with SQLite', stars: 8, forks: 2, lang: 'Python', langColor: '#3776AB' },
  { name: 'ai-ml-projects', description: 'Collection of machine learning experiments and classification models', stars: 15, forks: 5, lang: 'Jupyter', langColor: '#DA5B0B' },
  { name: 'web-portfolio', description: 'Personal portfolio website with animations and modern UI design', stars: 20, forks: 7, lang: 'JavaScript', langColor: '#F7DF1E' },
  { name: 'data-science-notebooks', description: 'Data analysis, visualization and statistics exploration notebooks', stars: 10, forks: 4, lang: 'Python', langColor: '#3776AB' },
  { name: 'react-projects', description: 'Frontend React.js applications built during CCBP 4.0 training', stars: 9, forks: 2, lang: 'JavaScript', langColor: '#F7DF1E' },
];

// Simulated contribution grid
function ContribGrid() {
  const weeks = 53;
  const days = 7;
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const rand = Math.random();
    const level = rand > 0.65 ? (rand > 0.85 ? (rand > 0.95 ? 4 : 3) : 2) : (rand > 0.5 ? 1 : 0);
    return level;
  });

  const colors = ['rgba(255,20,147,0.08)', 'rgba(255,20,147,0.25)', 'rgba(255,20,147,0.45)', 'rgba(255,20,147,0.7)', '#FF1493'];

  return (
    <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${weeks}, 14px)`,
          gridTemplateRows: `repeat(${days}, 14px)`,
          gap: 3,
          width: 'fit-content',
        }}
      >
        {cells.map((level, i) => (
          <div
            key={i}
            className="github-contrib-cell"
            style={{
              background: colors[level],
              border: level > 0 ? `1px solid rgba(255,20,147,${level * 0.15})` : '1px solid rgba(255,255,255,0.04)',
              boxShadow: level >= 3 ? `0 0 6px rgba(255,20,147,${level * 0.2})` : 'none',
              borderRadius: 3,
            }}
            title={`${level} contributions`}
          />
        ))}
      </div>
    </div>
  );
}

export default function GitHub() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="github" ref={sectionRef} style={{ padding: '100px 0' }}>
      <div className="section-wrapper">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // GITHUB
          </p>
          <h2 className="section-heading gradient-text">Open Source & Code</h2>
          <div className="section-line" />
        </div>

        {/* GitHub profile banner */}
        <div
          className="animate-on-scroll glass-card"
          style={{ padding: '32px 36px', marginBottom: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(255,20,147,0.3), rgba(216,180,254,0.3))',
                border: '2px solid #FF1493',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 30,
                boxShadow: '0 0 20px rgba(255,20,147,0.3)',
              }}
            >
              <svg width="34" height="34" fill="#FF1493" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontFamily: 'Orbitron', fontWeight: 800, fontSize: '1.2rem', color: 'white', marginBottom: 4 }}>
                @harishharsha819775
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk' }}>
                AI Engineer · Full Stack Developer · Open Source Enthusiast
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {[
              { label: 'Repositories', value: '12+' },
              { label: 'Stars', value: '74+' },
              { label: 'Commits', value: '200+' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Orbitron', fontWeight: 800, fontSize: '1.4rem', color: '#FF1493' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>{s.label}</div>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/harishharsha819775"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
            id="github-profile-btn"
            style={{ padding: '12px 24px' }}
          >
            <span>View Profile →</span>
          </a>
        </div>

        {/* Contribution graph */}
        <div className="animate-on-scroll glass-card" style={{ padding: '28px 32px', marginBottom: 36 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
            <h4 style={{ fontFamily: 'Orbitron', fontWeight: 700, fontSize: '1rem', color: 'white' }}>
              Contribution Activity
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>Less</span>
              {[0, 1, 2, 3, 4].map(l => (
                <div
                  key={l}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    background: ['rgba(255,20,147,0.08)', 'rgba(255,20,147,0.25)', 'rgba(255,20,147,0.45)', 'rgba(255,20,147,0.7)', '#FF1493'][l],
                  }}
                />
              ))}
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>More</span>
            </div>
          </div>
          <ContribGrid />
        </div>

        {/* Repository grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {repos.map((repo, i) => (
            <div
              key={i}
              className="animate-on-scroll"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <a
                href="https://github.com/harishharsha819775"
                target="_blank"
                rel="noopener noreferrer"
                id={`github-repo-${i}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="glass-card"
                  style={{ padding: '22px 24px', height: '100%' }}
                >
                  {/* Repo name */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ color: 'rgba(255,20,147,0.6)', fontSize: 18 }}>📁</span>
                      <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.95rem', color: '#FF69B4' }}>
                        {repo.name}
                      </h4>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 16 }}>↗</span>
                  </div>

                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, fontFamily: 'Inter', marginBottom: 16 }}>
                    {repo.description}
                  </p>

                  {/* Stats row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: repo.langColor }} />
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>{repo.lang}</span>
                    </div>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>⭐ {repo.stars}</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>🔀 {repo.forks}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Open source CTA */}
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="https://github.com/harishharsha819775"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid"
            id="github-all-repos"
          >
            <span>🐙 Explore All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
}
