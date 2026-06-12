'use client';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(d => !d)}
      id="theme-switcher"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        position: 'fixed',
        top: 80,
        right: 24,
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: isDark ? 'rgba(255,20,147,0.15)' : 'rgba(26,8,38,0.15)',
        border: '1px solid rgba(255,20,147,0.3)',
        color: isDark ? '#FF69B4' : '#FF1493',
        fontSize: 20,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        transition: 'all 0.3s ease',
        boxShadow: isDark ? '0 0 15px rgba(255,20,147,0.2)' : '0 0 15px rgba(255,20,147,0.1)',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(255,20,147,0.5)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = isDark ? '0 0 15px rgba(255,20,147,0.2)' : '0 0 15px rgba(255,20,147,0.1)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
