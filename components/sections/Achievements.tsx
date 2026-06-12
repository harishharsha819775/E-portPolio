'use client';
import { useEffect, useRef } from 'react';

const achievements = [
  {
    icon: '🏆',
    title: 'NxtWave CCBP 4.0 Fellow',
    description: 'Selected as an industry-ready fellow in the prestigious CCBP 4.0 program by NxtWave Disruptive Technologies.',
    category: 'Certification',
    color: '#FF1493',
    year: '2025',
  },
  {
    icon: '🎓',
    title: 'AI Engineering Enrollment',
    description: 'Enrolled in Bachelor of Engineering (B.E.) in Artificial Intelligence at REVA University, one of top universities.',
    category: 'Academic',
    color: '#D8B4FE',
    year: '2025',
  },
  {
    icon: '💻',
    title: 'Full Stack Development Certification',
    description: 'Completed comprehensive full-stack development modules covering frontend and backend technologies.',
    category: 'Certification',
    color: '#FF69B4',
    year: '2025',
  },
  {
    icon: '🐍',
    title: 'Python Programming Mastery',
    description: 'Successfully completed Python programming fundamentals and advanced concepts with hands-on projects.',
    category: 'Achievement',
    color: '#FF66CC',
    year: '2025',
  },
  {
    icon: '📊',
    title: 'Data Analytics Project',
    description: 'Built an Exam Result Analysis Dashboard using Python and Streamlit for real-world data visualization.',
    category: 'Project',
    color: '#FBD38D',
    year: '2025',
  },
  {
    icon: '🌐',
    title: 'Web Development Projects',
    description: 'Developed multiple responsive web applications using HTML, CSS, JavaScript, and React.js frameworks.',
    category: 'Project',
    color: '#68D391',
    year: '2025',
  },
  {
    icon: '🧩',
    title: 'Problem Solving Challenges',
    description: 'Solved 100+ coding problems on competitive programming platforms improving algorithmic thinking.',
    category: 'Achievement',
    color: '#C084FC',
    year: '2025',
  },
  {
    icon: '🤖',
    title: 'AI/ML Learning Milestone',
    description: 'Completed foundational machine learning courses and implemented multiple ML algorithms from scratch.',
    category: 'Learning',
    color: '#4FC3F7',
    year: '2025',
  },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
    <section id="achievements" ref={sectionRef} style={{ padding: '100px 0' }}>
      <div className="section-wrapper">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // ACHIEVEMENTS
          </p>
          <h2 className="section-heading gradient-text">Milestones & Awards</h2>
          <div className="section-line" />
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 20,
          }}
        >
          {achievements.map((item, i) => (
            <div
              key={i}
              className="animate-on-scroll achievement-card shimmer"
              style={{ transitionDelay: `${i * 0.06}s` }}
              id={`achievement-${i}`}
            >
              {/* Top: icon + year */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <span
                    style={{
                      padding: '3px 10px',
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      borderRadius: 50,
                      fontSize: 11,
                      color: item.color,
                      fontWeight: 700,
                      fontFamily: 'Orbitron',
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'Space Grotesk' }}>
                    {item.year}
                  </span>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'white',
                  marginBottom: 8,
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontFamily: 'Inter' }}>
                {item.description}
              </p>

              {/* Bottom accent */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
                className="achievement-bottom-line"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
