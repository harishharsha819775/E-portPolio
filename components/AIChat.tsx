'use client';
import { useState, useRef, useEffect } from 'react';

const qaDatabase: Record<string, string> = {
  hi: "Hey there! 👋 I'm HPC-AI, Harisha's intelligent assistant. Ask me anything about Harisha — his skills, projects, education, or how to get in touch!",
  hello: "Hello! 👋 Welcome to Harisha P C's portfolio. I can tell you about his skills, projects, education, or contact details. What would you like to know?",
  name: "I'm Harisha P C — an Artificial Intelligence Engineering student at REVA University (2025–2028) and a Full Stack Developer at NxtWave CCBP 4.0 Academy! 🎓",
  skills: "Harisha's skills include:\n• Python, JavaScript, HTML5, CSS3\n• React.js & Full Stack Development\n• Artificial Intelligence & Machine Learning\n• Data Science & Analytics\n• Git & GitHub\n• Problem Solving 🧩",
  projects: "Harisha has built some great projects! 🚀\n1. Exam Result Analysis Dashboard (Python + Streamlit)\n2. Student Management System (SQLite + CRUD)\n3. AI-Based Classification System (ML)\n4. Responsive Web Portfolio (React)\n5. Data Science Analytics Platform\nCheck the Projects section for more details!",
  education: "Harisha is pursuing:\n🎓 B.E. in Artificial Intelligence — REVA University (2025–2028)\n⚡ Full Stack Development — NxtWave CCBP 4.0 Academy\nHe's passionate about AI and building impactful software!",
  contact: "You can reach Harisha at:\n✉️ hqrishhari@gmail.com\n💼 linkedin.com/in/harishharsha\n🐙 github.com/harishharsha819775\nOr use the Contact form below! 😊",
  location: "Harisha is based in Bengaluru, Karnataka, India 📍 — the Silicon Valley of India!",
  university: "Harisha studies at REVA University in Bengaluru, pursuing B.E. in Artificial Intelligence (2025–2028). 🏫",
  python: "Python is Harisha's primary programming language! He uses it for AI/ML projects, data science, and backend development. He has built multiple projects with Python including Streamlit dashboards and ML models. 🐍",
  react: "Harisha is learning React.js through NxtWave CCBP 4.0 Academy and has built several frontend projects with it. He loves building dynamic, responsive UIs! ⚛️",
  ai: "Artificial Intelligence is Harisha's passion! He's studying AI Engineering at REVA University and actively exploring machine learning, neural networks, data science, and the future of intelligent systems. 🤖",
  github: "You can find Harisha's open-source work at github.com/harishharsha819775 🐙 He's actively building and contributing to projects across AI, web dev, and data science.",
  linkedin: "Connect with Harisha on LinkedIn at linkedin.com/in/harishharsha 💼",
  experience: "Harisha is gaining experience through:\n• NxtWave CCBP 4.0 Fellowship\n• REVA University AI Engineering\n• Competitive Coding Challenges\n• Self-driven AI/ML Exploration\n• Internship Preparation 🚀",
  blog: "Harisha writes tech articles on his Dev Blog! Topics include AI, React, Python, career insights, and project walkthroughs. Check /blog to read them! 📝",
  default: "Great question! I'm not sure about that specific detail, but you can reach Harisha directly at hqrishhari@gmail.com or scroll through the portfolio to discover more about his work! 😊",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, val] of Object.entries(qaDatabase)) {
    if (lower.includes(key)) return val;
  }
  return qaDatabase.default;
}

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hey! 👋 I'm HPC-AI. Ask me about Harisha's skills, projects, or how to contact him!" },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(m => [...m, { from: 'user', text: userMsg }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { from: 'bot', text: getBotResponse(userMsg) }]);
    }, 900 + Math.random() * 400);
  };

  const suggestions = ['Skills', 'Projects', 'Education', 'Contact', 'GitHub', 'Blog'];

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="ai-chat-window" id="ai-chat-window">
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(255,20,147,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'linear-gradient(135deg, rgba(255,20,147,0.15), rgba(216,180,254,0.1))',
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF1493, #D8B4FE)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                boxShadow: '0 0 12px rgba(255,20,147,0.5)',
              }}
            >
              🤖
            </div>
            <div>
              <div style={{ fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.85rem', color: 'white' }}>HPC-AI</div>
              <div style={{ fontSize: 11, color: '#4ade80', display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', boxShadow: '0 0 6px #4ade80' }} />
                Online
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              id="ai-chat-close"
              style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 18, cursor: 'pointer' }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.from === 'user'
                      ? 'linear-gradient(135deg, #FF1493, #FF69B4)'
                      : 'rgba(255,255,255,0.07)',
                    border: msg.from === 'bot' ? '1px solid rgba(255,20,147,0.2)' : 'none',
                    color: 'white',
                    fontSize: 13,
                    fontFamily: 'Inter',
                    lineHeight: 1.6,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div style={{ display: 'flex', gap: 5, alignItems: 'center', paddingLeft: 4 }}>
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      background: '#FF1493',
                      animation: `bounce-slow 1s ease-in-out ${i * 0.15}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestion chips */}
          <div style={{ padding: '8px 14px 0', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {suggestions.map(s => (
              <button
                key={s}
                onClick={() => { setInput(s); }}
                style={{
                  padding: '4px 10px',
                  background: 'rgba(255,20,147,0.08)',
                  border: '1px solid rgba(255,20,147,0.25)',
                  borderRadius: 50,
                  color: '#FF69B4',
                  fontSize: 11,
                  fontFamily: 'Space Grotesk',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,20,147,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,20,147,0.08)')}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '12px 14px', display: 'flex', gap: 8 }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask me anything..."
              id="ai-chat-input"
              style={{
                flex: 1,
                padding: '10px 14px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,20,147,0.25)',
                borderRadius: 50,
                color: 'white',
                fontFamily: 'Inter',
                fontSize: 13,
                outline: 'none',
              }}
            />
            <button
              onClick={send}
              id="ai-chat-send"
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF1493, #FF69B4)',
                border: 'none',
                color: 'white',
                fontSize: 16,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 0 12px rgba(255,20,147,0.4)',
              }}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        className="ai-chat-btn"
        onClick={() => setOpen(o => !o)}
        id="ai-chat-toggle"
        title="AI Chat Assistant"
      >
        {open ? '✕' : '🤖'}
      </button>
    </>
  );
}
