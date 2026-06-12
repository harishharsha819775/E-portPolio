'use client';
import Link from 'next/link';

const footerLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://github.com/harishharsha819775',
    label: 'GitHub',
    icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>,
    id: 'footer-github',
  },
  {
    href: 'https://linkedin.com/in/harishharsha',
    label: 'LinkedIn',
    icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    id: 'footer-linkedin',
  },
  {
    href: 'mailto:hqrishhari@gmail.com',
    label: 'Email',
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    id: 'footer-email',
  },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer-glow" style={{ position: 'relative', zIndex: 1 }}>
      {/* Animated top border */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, #FF1493, #D8B4FE, #FF1493, transparent)',
          backgroundSize: '200%',
          animation: 'shimmer-move 3s linear infinite',
        }}
      />

      <div className="section-wrapper" style={{ padding: '60px 24px 0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'Orbitron, monospace',
                fontWeight: 900,
                fontSize: '2rem',
                background: 'linear-gradient(135deg, #FF1493, #D8B4FE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: 4,
                marginBottom: 14,
              }}
            >
              HPC
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: 240 }}>
              Building Intelligent Solutions with Code, Creativity, and Artificial Intelligence.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {socialLinks.map(s => (
                <a
                  key={s.id}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="social-icon"
                  id={s.id}
                  title={s.label}
                  style={{ width: 40, height: 40 }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: 'Orbitron',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#FF1493',
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); scrollTo(link.href.replace('#', '')); }}
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#FF1493')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    <span style={{ color: 'rgba(255,20,147,0.4)', fontSize: 12 }}>→</span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  id="footer-blog-link"
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FF1493')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  <span style={{ color: 'rgba(255,20,147,0.4)', fontSize: 12 }}>→</span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'Orbitron',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#FF1493',
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 20,
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '✉️', text: 'hqrishhari@gmail.com', href: 'mailto:hqrishhari@gmail.com' },
                { icon: '💼', text: 'linkedin.com/in/harishharsha', href: 'https://linkedin.com/in/harishharsha' },
                { icon: '📍', text: 'Bengaluru, Karnataka, India', href: '#' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontFamily: 'Inter',
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#FF69B4')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  <span>{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,20,147,0.1)',
            padding: '24px 0 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ fontFamily: 'Space Grotesk', fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            Designed &amp; Developed by{' '}
            <span style={{ color: '#FF1493', fontWeight: 700 }}>Harisha P C</span>
          </p>
          <p style={{ fontFamily: 'Space Grotesk', fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
            © 2028 Harisha P C. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="back-to-top"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(255,20,147,0.15)',
              border: '1px solid rgba(255,20,147,0.3)',
              color: '#FF1493',
              fontSize: 16,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = '#FF1493';
              (e.currentTarget as HTMLButtonElement).style.color = 'white';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(255,20,147,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,20,147,0.15)';
              (e.currentTarget as HTMLButtonElement).style.color = '#FF1493';
              (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
            }}
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
