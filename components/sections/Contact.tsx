'use client';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'hqrishhari@gmail.com',
      href: 'mailto:hqrishhari@gmail.com',
      color: '#FF1493',
      id: 'contact-email',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/harishharsha',
      href: 'https://linkedin.com/in/harishharsha',
      color: '#0A66C2',
      id: 'contact-linkedin',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/harishharsha819775',
      href: 'https://github.com/harishharsha819775',
      color: '#FF69B4',
      id: 'contact-github',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      href: '#',
      color: '#D8B4FE',
      id: 'contact-location',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} style={{ padding: '100px 0', background: 'rgba(255,20,147,0.02)' }}>
      <div className="section-wrapper">
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: 64 }}>
          <p style={{ fontFamily: 'Orbitron', color: '#FF69B4', letterSpacing: 4, fontSize: 13, textTransform: 'uppercase', marginBottom: 12 }}>
            // GET IN TOUCH
          </p>
          <h2 className="section-heading gradient-text">Let's Connect</h2>
          <div className="section-line" />
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 500, margin: '0 auto', fontFamily: 'Inter', fontSize: 15, lineHeight: 1.7 }}>
            Have a project idea, want to collaborate, or just want to say hi? I'd love to hear from you!
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 48,
            alignItems: 'start',
          }}
        >
          {/* Left — Contact info */}
          <div className="animate-on-scroll from-left">
            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {contactDetails.map(detail => (
                <a
                  key={detail.id}
                  href={detail.href}
                  target={detail.href.startsWith('http') ? '_blank' : undefined}
                  rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  id={detail.id}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="glass-card"
                    style={{ padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16 }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: `${detail.color}15`,
                        border: `1px solid ${detail.color}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    >
                      {detail.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: detail.color, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'Orbitron', marginBottom: 3 }}>
                        {detail.label}
                      </div>
                      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter', fontWeight: 500 }}>
                        {detail.value}
                      </div>
                    </div>
                    {detail.href !== '#' && (
                      <div style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.2)', fontSize: 16 }}>→</div>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Social icons row */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { href: 'https://github.com/harishharsha819775', icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" /></svg>, id: 'social-github' },
                { href: 'https://linkedin.com/in/harishharsha', icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, id: 'social-linkedin' },
                { href: 'mailto:hqrishhari@gmail.com', icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, id: 'social-email' },
              ].map(s => (
                <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="social-icon" id={s.id}>
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Availability status */}
            <div
              className="glass"
              style={{ padding: '16px 20px', marginTop: 28, display: 'flex', alignItems: 'center', gap: 12, borderRadius: 14 }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 10px #4ade80',
                  animation: 'pulse-dot 1.5s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontFamily: 'Space Grotesk', fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                Currently open to internship and project opportunities
              </span>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="animate-on-scroll from-right">
            <div
              className="holo-border"
              style={{ position: 'relative' }}
            >
              <div className="holo-border-inner" style={{ padding: '32px 36px' }}>
                <h3
                  style={{
                    fontFamily: 'Orbitron',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: 6,
                  }}
                >
                  Send a Message
                </h3>
                <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 28 }}>
                  I'll reply within 24 hours. Let's build something amazing together!
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: '#FF69B4', fontFamily: 'Orbitron', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        id="contact-form-name"
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: '#FF69B4', fontFamily: 'Orbitron', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                        id="contact-form-email"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#FF69B4', fontFamily: 'Orbitron', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project collaboration, internship, etc."
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      required
                      id="contact-form-subject"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: '#FF69B4', fontFamily: 'Orbitron', letterSpacing: 1, marginBottom: 8, textTransform: 'uppercase' }}>
                      Message
                    </label>
                    <textarea
                      placeholder="Tell me about your project or idea..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      id="contact-form-message"
                      rows={5}
                      className="contact-input"
                      style={{ resize: 'vertical', minHeight: 120 }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-solid"
                    disabled={status === 'sending'}
                    id="contact-form-submit"
                    style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
                  >
                    {status === 'sending' ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ display: 'inline-block', animation: 'rotate-slow 1s linear infinite' }}>⚙️</span>
                        Sending...
                      </span>
                    ) : status === 'success' ? (
                      <span>✅ Message Sent!</span>
                    ) : (
                      <span>🚀 Send Message</span>
                    )}
                  </button>

                  {status === 'success' && (
                    <div
                      style={{
                        padding: '12px 16px',
                        background: 'rgba(74,222,128,0.1)',
                        border: '1px solid rgba(74,222,128,0.3)',
                        borderRadius: 10,
                        color: '#4ade80',
                        fontFamily: 'Space Grotesk',
                        fontSize: 14,
                        textAlign: 'center',
                      }}
                    >
                      ✅ Thanks! I'll get back to you within 24 hours.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
