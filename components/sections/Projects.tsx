'use client';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Exam Result Analysis Dashboard',
    description: 'An interactive data visualization dashboard that analyzes exam results, identifies performance trends, and generates comprehensive reports with insightful charts and metrics.',
    icon: '📊',
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Data Visualization'],
    github: 'https://github.com/harishharsha819775',
    demo: '#',
    gradient: 'linear-gradient(135deg, rgba(255,20,147,0.15), rgba(216,180,254,0.1))',
    glow: '#FF1493',
    featured: true,
  },
  {
    id: 2,
    title: 'Student Management System',
    description: 'A full-featured student management application with CRUD operations, database integration, attendance tracking, grade management, and an intuitive admin interface.',
    icon: '🎓',
    tags: ['Python', 'SQLite', 'Database', 'CRUD Operations', 'Backend'],
    github: 'https://github.com/harishharsha819775',
    demo: '#',
    gradient: 'linear-gradient(135deg, rgba(216,180,254,0.15), rgba(255,105,180,0.1))',
    glow: '#D8B4FE',
    featured: true,
  },
  {
    id: 3,
    title: 'AI-Based Classification System',
    description: 'Machine learning project implementing various classification algorithms with data preprocessing, feature engineering, model training, and performance evaluation metrics.',
    icon: '🤖',
    tags: ['Machine Learning', 'Python', 'Scikit-learn', 'NumPy', 'Data Analytics'],
    github: 'https://github.com/harishharsha819775',
    demo: '#',
    gradient: 'linear-gradient(135deg, rgba(255,102,204,0.15), rgba(255,20,147,0.1))',
    glow: '#FF66CC',
    featured: true,
  },
  {
    id: 4,
    title: 'Responsive Web Portfolio',
    description: 'A fully responsive web application built with modern HTML, CSS, and JavaScript featuring smooth animations, interactive UI components, and optimized performance.',
    icon: '🌐',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    github: 'https://github.com/harishharsha819775',
    demo: '#',
    gradient: 'linear-gradient(135deg, rgba(97,218,251,0.1), rgba(255,20,147,0.1))',
    glow: '#61DAFB',
    featured: false,
  },
  {
    id: 5,
    title: 'Data Science Analytics Platform',
    description: 'Comprehensive data analysis tool featuring statistical analysis, data cleaning pipelines, interactive visualizations, and automated report generation for datasets.',
    icon: '🔬',
    tags: ['Data Analysis', 'Python', 'Matplotlib', 'Seaborn', 'Visualization'],
    github: 'https://github.com/harishharsha819775',
    demo: '#',
    gradient: 'linear-gradient(135deg, rgba(251,211,141,0.1), rgba(216,180,254,0.1))',
    glow: '#FBD38D',
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // 3D tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateY(0)';
    setHovered(null);
  };

  return (
    <section id="projects" ref={sectionRef} style={{ padding: '100px 0' }}>
      <div className="section-wrapper">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // PROJECTS
          </p>
          <h2 className="section-heading gradient-text">Featured Projects</h2>
          <div className="section-line" />
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto', fontFamily: 'Inter', fontSize: 15 }}>
            A showcase of my hands-on work — from AI models to full-stack applications.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: 28,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="animate-on-scroll project-card"
              style={{
                background: project.gradient,
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseMove={e => { handleMouseMove(e, project.id); setHovered(project.id); }}
              onMouseLeave={handleMouseLeave}
              id={`project-${project.id}`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    padding: '4px 10px',
                    background: 'rgba(255,20,147,0.2)',
                    border: '1px solid rgba(255,20,147,0.4)',
                    borderRadius: 50,
                    fontSize: 11,
                    color: '#FF1493',
                    fontWeight: 700,
                    fontFamily: 'Orbitron',
                    letterSpacing: 1,
                  }}
                >
                  FEATURED
                </div>
              )}

              {/* Project icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  background: `${project.glow}20`,
                  border: `1px solid ${project.glow}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 30,
                  marginBottom: 20,
                  transition: 'all 0.3s ease',
                  boxShadow: hovered === project.id ? `0 0 20px ${project.glow}50` : 'none',
                }}
              >
                {project.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.75,
                  fontFamily: 'Inter',
                  marginBottom: 20,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="tech-badge"
                    style={{ borderColor: `${project.glow}35`, color: project.glow }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: 12 }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`github-project-${project.id}`}
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 10,
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.12)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)';
                  }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  id={`demo-project-${project.id}`}
                  style={{
                    flex: 1,
                    padding: '10px 16px',
                    background: `${project.glow}20`,
                    border: `1px solid ${project.glow}40`,
                    borderRadius: 10,
                    color: project.glow,
                    fontSize: 13,
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${project.glow}35`;
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 15px ${project.glow}40`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${project.glow}20`;
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <span>↗</span> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="https://github.com/harishharsha819775"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
            id="view-all-projects"
          >
            <span>View All Projects on GitHub →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
