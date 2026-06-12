'use client';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Python', icon: '🐍', level: 80, category: 'Languages', color: '#3776AB' },
  { name: 'HTML5', icon: '🌐', level: 90, category: 'Frontend', color: '#E34F26' },
  { name: 'CSS3', icon: '🎨', level: 85, category: 'Frontend', color: '#1572B6' },
  { name: 'JavaScript', icon: '⚡', level: 78, category: 'Languages', color: '#F7DF1E' },
  { name: 'React.js', icon: '⚛️', level: 75, category: 'Frontend', color: '#61DAFB' },
  { name: 'Full Stack Dev', icon: '🖥️', level: 72, category: 'Development', color: '#FF1493' },
  { name: 'Backend Dev', icon: '⚙️', level: 65, category: 'Development', color: '#68D391' },
  { name: 'AI & ML', icon: '🤖', level: 70, category: 'AI/ML', color: '#D8B4FE' },
  { name: 'Data Science', icon: '📊', level: 68, category: 'AI/ML', color: '#FBD38D' },
  { name: 'Git & GitHub', icon: '🐙', level: 82, category: 'Tools', color: '#F05032' },
  { name: 'Problem Solving', icon: '🧩', level: 88, category: 'Soft Skills', color: '#FF69B4' },
  { name: 'SQL & Databases', icon: '🗃️', level: 70, category: 'Tools', color: '#4FC3F7' },
];

const categories = ['All', 'Languages', 'Frontend', 'Development', 'AI/ML', 'Tools', 'Soft Skills'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60);
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
    <section id="skills" ref={sectionRef} style={{ padding: '100px 0' }}>
      <div className="section-wrapper">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // SKILLS
          </p>
          <h2 className="section-heading gradient-text">Technical Arsenal</h2>
          <div className="section-line" />
        </div>

        {/* Category filter */}
        <div className="animate-on-scroll" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 48 }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`skill-cat-${cat}`}
              style={{
                padding: '8px 20px',
                borderRadius: 50,
                border: `1px solid ${activeCategory === cat ? '#FF1493' : 'rgba(255,20,147,0.25)'}`,
                background: activeCategory === cat ? 'rgba(255,20,147,0.2)' : 'transparent',
                color: activeCategory === cat ? '#FF1493' : 'rgba(255,255,255,0.55)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 13,
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === cat ? '0 0 15px rgba(255,20,147,0.3)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 20,
          }}
        >
          {filteredSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="animate-on-scroll skill-planet"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {/* Icon */}
              <div className="skill-icon">
                {skill.icon}
              </div>

              {/* Name */}
              <div
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 14,
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {skill.name}
              </div>

              {/* Level bar */}
              <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'Orbitron', letterSpacing: 1 }}>
                    {skill.category}
                  </span>
                  <span style={{ fontSize: 12, color: '#FF69B4', fontWeight: 700, fontFamily: 'Orbitron' }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-fill"
                    style={{
                      width: visible ? `${skill.level}%` : '0%',
                      transitionDelay: `${i * 0.08}s`,
                      background: `linear-gradient(90deg, #FF1493, ${skill.color})`,
                    }}
                  />
                </div>
              </div>

              {/* Hover glow ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: -1,
                  borderRadius: 20,
                  background: 'transparent',
                  transition: 'all 0.4s ease',
                  pointerEvents: 'none',
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom orbit showcase */}
        <div className="animate-on-scroll" style={{ marginTop: 64, textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              gap: 12,
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '16px 24px',
              background: 'rgba(255,20,147,0.05)',
              border: '1px solid rgba(255,20,147,0.15)',
              borderRadius: 16,
            }}
          >
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>
              Currently Learning →
            </span>
            {['Next.js', 'TypeScript', 'TensorFlow', 'Docker'].map(tech => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
