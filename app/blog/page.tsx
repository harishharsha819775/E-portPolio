'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: 'getting-started-with-ai',
    title: 'Getting Started with Artificial Intelligence: A Student\'s Journey',
    excerpt: 'My personal journey diving into the world of AI — from understanding machine learning fundamentals to building my first neural network. Here\'s everything I wish I knew at the start.',
    content: 'Full blog post content here...',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Machine Learning', 'Python', 'Beginners'],
    date: 'June 10, 2026',
    readTime: '5 min read',
    icon: '🤖',
    color: '#FF1493',
    featured: true,
    views: 1240,
    likes: 87,
  },
  {
    id: 2,
    slug: 'react-vs-vanilla-js',
    title: 'React.js vs Vanilla JavaScript: Which Should You Learn First?',
    excerpt: 'A deep dive into the age-old debate among web developers. As someone who learned both, I\'ll share my honest perspective on which path gives you the strongest foundation.',
    content: 'Full blog post content here...',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Web Dev', 'Career'],
    date: 'June 5, 2026',
    readTime: '7 min read',
    icon: '⚛️',
    color: '#61DAFB',
    featured: true,
    views: 980,
    likes: 64,
  },
  {
    id: 3,
    slug: 'python-for-data-science',
    title: 'Python for Data Science: Top Libraries Every Beginner Must Know',
    excerpt: 'NumPy, Pandas, Matplotlib, Seaborn — these four libraries are the backbone of data science in Python. Let me break them down with practical examples you can use today.',
    content: 'Full blog post content here...',
    category: 'Data Science',
    tags: ['Python', 'Data Science', 'Pandas', 'NumPy'],
    date: 'May 28, 2026',
    readTime: '6 min read',
    icon: '📊',
    color: '#D8B4FE',
    featured: false,
    views: 760,
    likes: 52,
  },
  {
    id: 4,
    slug: 'nxtwave-ccbp-review',
    title: 'NxtWave CCBP 4.0 Review: Is It Worth It for Aspiring Developers?',
    excerpt: 'After spending months in the CCBP 4.0 program, here\'s my honest review — what I loved, what could be better, and whether it\'s the right choice for your career goals.',
    content: 'Full blog post content here...',
    category: 'Career',
    tags: ['NxtWave', 'CCBP', 'Career', 'Review'],
    date: 'May 20, 2026',
    readTime: '8 min read',
    icon: '⚡',
    color: '#FF69B4',
    featured: false,
    views: 1450,
    likes: 120,
  },
  {
    id: 5,
    slug: 'building-student-management-system',
    title: 'How I Built a Student Management System from Scratch',
    excerpt: 'A step-by-step walkthrough of my Student Management System project — database design, CRUD operations, and the lessons I learned building my first real-world application.',
    content: 'Full blog post content here...',
    category: 'Projects',
    tags: ['Python', 'SQLite', 'Backend', 'Tutorial'],
    date: 'May 12, 2026',
    readTime: '10 min read',
    icon: '🎓',
    color: '#FF66CC',
    featured: false,
    views: 634,
    likes: 43,
  },
  {
    id: 6,
    slug: 'future-of-ai-engineering',
    title: 'The Future of AI Engineering: What Students Should Prepare For',
    excerpt: 'The AI landscape is evolving at a breathtaking pace. As a student pursuing AI Engineering, here\'s what I believe the next 5 years will look like and how to stay ahead.',
    content: 'Full blog post content here...',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Future Tech', 'Career', 'Engineering'],
    date: 'May 5, 2026',
    readTime: '9 min read',
    icon: '🔮',
    color: '#FBD38D',
    featured: false,
    views: 890,
    likes: 76,
  },
];

const categories = ['All', 'AI & Machine Learning', 'Web Development', 'Data Science', 'Career', 'Projects'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const filtered = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Particle canvas (reused from main site)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let t = 0;
    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.01;
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const pulse = 0.4 + 0.4 * Math.sin(t + p.x * 0.01);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,20,147,${p.alpha * pulse})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,20,147,${(1 - d / 90) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div style={{ minHeight: '100vh', background: '#0D0118', color: 'white', position: 'relative' }}>
      {/* Particle background */}
      <canvas
        ref={canvasRef}
        style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
      />

      {/* Navbar */}
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '16px 24px',
          background: 'rgba(13,1,24,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,20,147,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'Orbitron, monospace',
            fontWeight: 900,
            fontSize: '1.4rem',
            background: 'linear-gradient(135deg, #FF1493, #D8B4FE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
            letterSpacing: 3,
          }}
          id="blog-nav-logo"
        >
          HPC
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link
            href="/"
            id="blog-nav-home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              fontFamily: 'Space Grotesk',
              fontSize: 14,
              fontWeight: 500,
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF1493')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
          >
            ← Back to Portfolio
          </Link>
          <span
            style={{
              padding: '6px 16px',
              background: 'rgba(255,20,147,0.15)',
              border: '1px solid rgba(255,20,147,0.4)',
              borderRadius: 50,
              color: '#FF1493',
              fontFamily: 'Orbitron',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            BLOG
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 60,
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 24px' }}>
          <p
            style={{
              fontFamily: 'Orbitron',
              color: '#FF69B4',
              letterSpacing: 4,
              fontSize: 12,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            // THOUGHTS &amp; INSIGHTS
          </p>
          <h1
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #FF1493, #FF69B4, #D8B4FE, #FF66CC)',
              backgroundSize: '300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 4s ease infinite',
              marginBottom: 20,
              lineHeight: 1.15,
            }}
          >
            Dev Blog
          </h1>
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: 16,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              marginBottom: 36,
            }}
          >
            Sharing my journey through AI, full-stack development, and emerging tech — written for curious minds and fellow builders.
          </p>

          {/* Search bar */}
          <div style={{ position: 'relative', maxWidth: 480, margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Search articles, tags..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              id="blog-search"
              style={{
                width: '100%',
                padding: '14px 20px 14px 48px',
                background: 'rgba(26,8,38,0.8)',
                border: '1px solid rgba(255,20,147,0.3)',
                borderRadius: 50,
                color: 'white',
                fontFamily: 'Inter',
                fontSize: 15,
                outline: 'none',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={e => {
                e.target.style.borderColor = '#FF1493';
                e.target.style.boxShadow = '0 0 0 3px rgba(255,20,147,0.1)';
              }}
              onBlur={e => {
                e.target.style.borderColor = 'rgba(255,20,147,0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <span style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: '#FF1493', fontSize: 18 }}>
              🔍
            </span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px', position: 'relative', zIndex: 1 }}>

        {/* Stats row */}
        <div
          className="animate-on-scroll"
          style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}
        >
          {[
            { label: 'Articles', value: blogPosts.length, icon: '📝' },
            { label: 'Total Views', value: '5.9K+', icon: '👁️' },
            { label: 'Categories', value: categories.length - 1, icon: '📁' },
            { label: 'Readers', value: '200+', icon: '❤️' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 20px',
                background: 'rgba(255,20,147,0.06)',
                border: '1px solid rgba(255,20,147,0.2)',
                borderRadius: 12,
              }}
            >
              <span style={{ fontSize: 20 }}>{stat.icon}</span>
              <span style={{ fontFamily: 'Orbitron', fontWeight: 800, fontSize: '1.1rem', color: '#FF1493' }}>{stat.value}</span>
              <span style={{ fontFamily: 'Space Grotesk', color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Category filter */}
        <div
          className="animate-on-scroll"
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`blog-cat-${cat.replace(/ & /g, '-').replace(/ /g, '-')}`}
              style={{
                padding: '8px 20px',
                borderRadius: 50,
                border: `1px solid ${activeCategory === cat ? '#FF1493' : 'rgba(255,20,147,0.2)'}`,
                background: activeCategory === cat ? 'rgba(255,20,147,0.2)' : 'transparent',
                color: activeCategory === cat ? '#FF1493' : 'rgba(255,255,255,0.5)',
                fontFamily: 'Space Grotesk',
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

        {/* Featured post (first one) */}
        {filtered.filter(p => p.featured).length > 0 && activeCategory === 'All' && !searchQuery && (
          <div className="animate-on-scroll" style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: 'Orbitron', color: '#FF1493', fontSize: 12, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>
              ★ Featured Post
            </p>
            {(() => {
              const post = filtered.filter(p => p.featured)[0];
              return (
                <div
                  onClick={() => setSelectedPost(post)}
                  id={`blog-featured-${post.id}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 0,
                    background: 'rgba(26,8,38,0.7)',
                    border: '1px solid rgba(255,20,147,0.3)',
                    borderRadius: 24,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    backdropFilter: 'blur(20px)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = '#FF1493';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 40px rgba(255,20,147,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,20,147,0.3)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Banner */}
                  <div
                    style={{
                      minHeight: 220,
                      background: `linear-gradient(135deg, ${post.color}25, rgba(26,8,38,0.9))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 80,
                      borderRight: '1px solid rgba(255,20,147,0.15)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ position: 'relative', zIndex: 1 }}>{post.icon}</div>
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: `radial-gradient(circle at center, ${post.color}20, transparent 70%)`,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '32px 36px' }}>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
                      <span
                        style={{
                          padding: '4px 12px',
                          background: `${post.color}20`,
                          border: `1px solid ${post.color}40`,
                          borderRadius: 50,
                          fontSize: 12,
                          color: post.color,
                          fontFamily: 'Orbitron',
                          fontWeight: 700,
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        style={{
                          padding: '4px 10px',
                          background: 'rgba(255,20,147,0.1)',
                          border: '1px solid rgba(255,20,147,0.2)',
                          borderRadius: 50,
                          fontSize: 12,
                          color: '#FF69B4',
                          fontFamily: 'Space Grotesk',
                        }}
                      >
                        ⭐ Featured
                      </span>
                    </div>
                    <h2
                      style={{
                        fontFamily: 'Orbitron',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'white',
                        lineHeight: 1.35,
                        marginBottom: 12,
                      }}
                    >
                      {post.title}
                    </h2>
                    <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>📅 {post.date}</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>⏱ {post.readTime}</span>
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>👁 {post.views.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Blog grid */}
        {filtered.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '80px 0',
              color: 'rgba(255,255,255,0.4)',
              fontFamily: 'Space Grotesk',
              fontSize: 16,
            }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            No articles found for "{searchQuery}". Try a different search.
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 24,
            }}
          >
            {(activeCategory === 'All' && !searchQuery ? filtered.slice(1) : filtered).map((post, i) => (
              <div
                key={post.id}
                className="animate-on-scroll glass-card"
                onClick={() => setSelectedPost(post)}
                id={`blog-card-${post.id}`}
                style={{
                  padding: '28px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transitionDelay: `${i * 0.07}s`,
                }}
              >
                {/* Top accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${post.color}, transparent)`,
                  }}
                />

                {/* Icon + category */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      background: `${post.color}15`,
                      border: `1px solid ${post.color}35`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 26,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {post.icon}
                  </div>
                  <span
                    style={{
                      padding: '4px 12px',
                      background: `${post.color}15`,
                      border: `1px solid ${post.color}30`,
                      borderRadius: 50,
                      fontSize: 11,
                      color: post.color,
                      fontFamily: 'Orbitron',
                      fontWeight: 700,
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'white',
                    marginBottom: 10,
                    lineHeight: 1.4,
                    transition: 'color 0.3s ease',
                  }}
                >
                  {post.title}
                </h3>

                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontFamily: 'Inter', marginBottom: 18 }}>
                  {post.excerpt.length > 120 ? post.excerpt.slice(0, 120) + '...' : post.excerpt}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {post.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}
                      style={{
                        padding: '3px 10px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 50,
                        fontSize: 11,
                        color: 'rgba(255,255,255,0.5)',
                        fontFamily: 'Space Grotesk',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'Space Grotesk' }}>
                      📅 {post.date}
                    </span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'Space Grotesk' }}>
                      ⏱ {post.readTime}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontFamily: 'Space Grotesk' }}>
                      👁 {post.views}
                    </span>
                    <span style={{ fontSize: 12, color: 'rgba(255,105,180,0.7)', fontFamily: 'Space Grotesk' }}>
                      ❤️ {post.likes}
                    </span>
                  </div>
                </div>

                {/* Read more arrow */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 18,
                    right: 18,
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: `${post.color}20`,
                    border: `1px solid ${post.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 14,
                    color: post.color,
                    transition: 'all 0.3s ease',
                  }}
                >
                  →
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Newsletter CTA */}
        <div
          className="animate-on-scroll"
          style={{
            marginTop: 80,
            padding: '48px 40px',
            background: 'rgba(26,8,38,0.7)',
            border: '1px solid rgba(255,20,147,0.25)',
            borderRadius: 24,
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: 'linear-gradient(90deg, transparent, #FF1493, #D8B4FE, transparent)',
            }}
          />
          <div style={{ fontSize: 48, marginBottom: 16 }}>📬</div>
          <h3
            style={{
              fontFamily: 'Orbitron',
              fontSize: '1.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FF1493, #D8B4FE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 12,
            }}
          >
            Stay Updated
          </h3>
          <p style={{ fontFamily: 'Inter', color: 'rgba(255,255,255,0.55)', fontSize: 15, marginBottom: 28, maxWidth: 420, margin: '0 auto 28px' }}>
            Get notified when I publish new articles on AI, full-stack development, and tech insights.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="your@email.com"
              id="newsletter-email"
              style={{
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,20,147,0.3)',
                borderRadius: 50,
                color: 'white',
                fontFamily: 'Inter',
                fontSize: 15,
                outline: 'none',
                width: 280,
              }}
              onFocus={e => (e.target.style.borderColor = '#FF1493')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255,20,147,0.3)')}
            />
            <button
              id="newsletter-subscribe"
              className="btn-solid"
              style={{ padding: '12px 28px' }}
            >
              <span>Subscribe</span>
            </button>
          </div>
        </div>
      </main>

      {/* Post Modal */}
      {selectedPost && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(13,1,24,0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            overflow: 'auto',
            padding: '80px 24px 60px',
          }}
          onClick={e => { if (e.target === e.currentTarget) setSelectedPost(null); }}
        >
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            {/* Close */}
            <button
              onClick={() => setSelectedPost(null)}
              id="blog-modal-close"
              style={{
                position: 'fixed',
                top: 24,
                right: 24,
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(255,20,147,0.15)',
                border: '1px solid rgba(255,20,147,0.4)',
                color: '#FF1493',
                fontSize: 18,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>

            {/* Article header */}
            <div
              style={{
                padding: '40px',
                background: `linear-gradient(135deg, ${selectedPost.color}15, rgba(26,8,38,0.9))`,
                border: `1px solid ${selectedPost.color}30`,
                borderRadius: 24,
                marginBottom: 32,
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 64, marginBottom: 20 }}>{selectedPost.icon}</div>
              <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 18 }}>
                <span
                  style={{
                    padding: '5px 14px',
                    background: `${selectedPost.color}20`,
                    border: `1px solid ${selectedPost.color}40`,
                    borderRadius: 50,
                    fontSize: 12,
                    color: selectedPost.color,
                    fontFamily: 'Orbitron',
                    fontWeight: 700,
                  }}
                >
                  {selectedPost.category}
                </span>
              </div>
              <h1
                style={{
                  fontFamily: 'Orbitron',
                  fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1.3,
                  marginBottom: 16,
                }}
              >
                {selectedPost.title}
              </h1>
              <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>📅 {selectedPost.date}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>⏱ {selectedPost.readTime}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk' }}>👁 {selectedPost.views.toLocaleString()} views</span>
                <span style={{ fontSize: 13, color: 'rgba(255,105,180,0.7)', fontFamily: 'Space Grotesk' }}>❤️ {selectedPost.likes} likes</span>
              </div>
            </div>

            {/* Article body */}
            <div
              style={{
                padding: '36px 40px',
                background: 'rgba(26,8,38,0.7)',
                border: '1px solid rgba(255,20,147,0.2)',
                borderRadius: 24,
                backdropFilter: 'blur(20px)',
                marginBottom: 24,
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: 16,
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.9,
                  marginBottom: 24,
                }}
              >
                {selectedPost.excerpt}
              </p>

              {/* Full content placeholder */}
              <div
                style={{
                  padding: '24px',
                  background: 'rgba(255,20,147,0.05)',
                  border: '1px solid rgba(255,20,147,0.15)',
                  borderRadius: 16,
                  marginBottom: 24,
                }}
              >
                <p style={{ fontFamily: 'Inter', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontStyle: 'italic' }}>
                  📝 Full article content will be added here. This blog platform is actively being developed with rich markdown support, code highlighting, and interactive examples.
                </p>
              </div>

              {/* Sample content sections */}
              {['Introduction', 'Key Concepts', 'Practical Examples', 'Conclusion'].map((section, i) => (
                <div key={i} style={{ marginBottom: 24 }}>
                  <h2
                    style={{
                      fontFamily: 'Orbitron',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: selectedPost.color,
                      marginBottom: 12,
                      paddingBottom: 8,
                      borderBottom: `1px solid ${selectedPost.color}25`,
                    }}
                  >
                    {i + 1}. {section}
                  </h2>
                  <p style={{ fontFamily: 'Inter', fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.85 }}>
                    {section === 'Introduction' && 'In this article, I\'ll walk you through my experience and insights on this topic, sharing practical knowledge from my learning journey at REVA University and NxtWave CCBP 4.0 Academy.'}
                    {section === 'Key Concepts' && 'Understanding the foundational principles is crucial before diving deep. Let\'s break down the most important concepts and how they connect to real-world applications in AI and software development.'}
                    {section === 'Practical Examples' && 'Theory is only half the battle. Here are concrete, hands-on examples from my own projects that demonstrate how to apply these concepts effectively in your own code.'}
                    {section === 'Conclusion' && 'Continuous learning and building are the keys to growth as a developer. I hope this article gave you valuable insights and sparks your curiosity to explore further. Stay curious, keep building!'}
                  </p>
                </div>
              ))}

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="tech-badge">#{tag}</span>
                ))}
              </div>
            </div>

            {/* Author card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                padding: '24px 30px',
                background: 'rgba(26,8,38,0.7)',
                border: '1px solid rgba(255,20,147,0.2)',
                borderRadius: 20,
                backdropFilter: 'blur(20px)',
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(255,20,147,0.3), rgba(216,180,254,0.3))',
                  border: '2px solid #FF1493',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  flexShrink: 0,
                }}
              >
                👨‍💻
              </div>
              <div>
                <p style={{ fontFamily: 'Orbitron', fontWeight: 700, fontSize: '1rem', color: 'white', marginBottom: 4 }}>Harisha P C</p>
                <p style={{ fontFamily: 'Inter', fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  AI Engineering student at REVA University & NxtWave CCBP 4.0 Fellow. Passionate about building intelligent solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid rgba(255,20,147,0.15)',
          padding: '40px 24px',
          textAlign: 'center',
          background: 'rgba(13,1,24,0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 20 }}>
          <Link href="/" id="footer-blog-home" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF1493')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            Portfolio
          </Link>
          <a href="mailto:hqrishhari@gmail.com" id="footer-blog-email" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF1493')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            Contact
          </a>
          <a href="https://github.com/harishharsha819775" target="_blank" rel="noopener noreferrer" id="footer-blog-github" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk', fontSize: 14, textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#FF1493')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            GitHub
          </a>
        </div>
        <p style={{ fontFamily: 'Space Grotesk', fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
          © 2028 Harisha P C · All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
