import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harisha P C | AI Engineer & Full Stack Developer',
  description:
    'Portfolio of Harisha P C — Artificial Intelligence Engineering student at REVA University and Full Stack Developer at NxtWave CCBP 4.0 Academy. Building intelligent solutions with code, creativity, and AI.',
  keywords: [
    'Harisha P C',
    'AI Engineer',
    'Full Stack Developer',
    'REVA University',
    'NxtWave',
    'Python',
    'React',
    'Portfolio',
  ],
  authors: [{ name: 'Harisha P C' }],
  openGraph: {
    title: 'Harisha P C | AI Engineer & Full Stack Developer',
    description: 'Building Intelligent Solutions with Code, Creativity, and Artificial Intelligence.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
