'use client';
import { useEffect, useRef } from 'react';

const experiences = [
  {
    period: '2025 – Present',
    title: 'NxtWave CCBP 4.0 Academy Fellow',
    organization: 'NxtWave Disruptive Technologies',
    type: 'Education Program',
    icon: '⚡',
    color: '#D8B4FE',
    description: 'Enrolled in one of India\'s most industry-oriented tech programs. Building real-world projects, mastering full-stack development tools, and earning industry certifications.',
    highlights: ['Full Stack Development', 'Industry Certifications', 'Hands-on Projects', 'Peer Learning'],
  },
  {
    period: '2025 – Present',
    title: 'AI Engineering Student',
    organization: 'REVA University',
    type: 'Academic',
    icon: '🎓',
    color: '#FF1493',
    description: 'Pursuing Bachelor of Engineering in Artificial Intelligence. Studying core AI concepts, machine learning algorithms, data structures, and programming paradigms.',
    highlights: ['Machine Learning', 'Neural Networks', 'Data Structures', 'Algorithms'],
  },
  {
    period: 'Ongoing',
    title: 'Competitive Coding & Problem Solving',
    organization: 'Various Platforms',
    type: 'Self Development',
    icon: '🧩',
    color: '#FF69B4',
    description: 'Actively solving coding challenges on platforms like HackerRank and LeetCode to sharpen algorithmic thinking, data structures knowledge, and computational problem solving.',
    highlights: ['Data Structures', 'Algorithms', 'Python', 'Logic Building'],
  },
  {
    period: 'Ongoing',
    title: 'AI & Machine Learning Explorer',
    organization: 'Independent Learning',
    type: 'Research',
    icon: '🤖',
    color: '#FF66CC',
    description: 'Self-driven exploration into AI/ML concepts including supervised learning, neural networks, natural language processing, and computer vision through online resources and projects.',
    highlights: ['Deep Learning', 'NLP', 'Computer Vision', 'Research'],
  },
  {
    period: 'Upcoming',
    title: 'Internship Preparation',
    organization: 'Career Development',
    type: 'Career Goal',
    icon: '🚀',
    color: '#FBD38D',
    description: 'Building a strong portfolio of projects and sharpening technical interview skills in preparation for software engineering and AI internship opportunities.',
    highlights: ['System Design', 'DSA', 'Portfolio Building', 'Interview Prep'],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="experience" ref={sectionRef} style={{ padding: '100px 0', background: 'rgba(255,20,147,0.02)' }}>
      <div className="section-wrapper">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // EXPERIENCE
          </p>
          <h2 className="section-heading gradient-text">My Journey</h2>
          <div className="section-line" />
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="animate-on-scroll experience-card"
              style={{ paddingLeft: 36 }}
            >
              {/* Type badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: `${exp.color}20`,
                      border: `1px solid ${exp.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 22,
                      flexShrink: 0,
                    }}
                  >
                    {exp.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.05rem', color: 'white', marginBottom: 3 }}>
                      {exp.title}
                    </h3>
                    <p style={{ fontSize: 14, color: exp.color, fontWeight: 600, fontFamily: 'Inter' }}>
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  <span
                    style={{
                      padding: '4px 12px',
                      background: `${exp.color}15`,
                      border: `1px solid ${exp.color}35`,
                      borderRadius: 50,
                      fontSize: 12,
                      color: exp.color,
                      fontWeight: 600,
                      fontFamily: 'Orbitron',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {exp.type}
                  </span>
                  <span
                    style={{
                      padding: '4px 12px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 50,
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.5)',
                      fontFamily: 'Space Grotesk',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    📅 {exp.period}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, fontFamily: 'Inter', marginBottom: 16 }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {exp.highlights.map((h, j) => (
                  <span key={j} className="tech-badge" style={{ borderColor: `${exp.color}35`, color: exp.color }}>
                    ✦ {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
