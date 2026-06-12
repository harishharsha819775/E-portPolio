'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
];

const externalLinks = [
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="section-wrapper flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
          style={{
            fontFamily: 'Orbitron, monospace',
            fontWeight: 900,
            fontSize: '1.5rem',
            background: 'linear-gradient(135deg, #FF1493, #D8B4FE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            letterSpacing: '3px',
          }}
        >
          HPC
        </a>

        {/* Desktop links */}
        <ul
          className="hidden md:flex items-center gap-6"
          style={{ listStyle: 'none', margin: 0, padding: 0 }}
        >
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          {externalLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link"
                id="nav-blog-link"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          id="hamburger-btn"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: '#FF1493',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scale(0)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            background: 'rgba(13,1,24,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255,20,147,0.2)',
            padding: '20px 24px',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{ display: 'block', padding: '12px 0', fontSize: '16px' }}
              onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
