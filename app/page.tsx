'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/sections/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Education = dynamic(() => import('@/components/sections/Education'), { ssr: false });
const Skills = dynamic(() => import('@/components/sections/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false });
const Experience = dynamic(() => import('@/components/sections/Experience'), { ssr: false });
const Achievements = dynamic(() => import('@/components/sections/Achievements'), { ssr: false });
const Statistics = dynamic(() => import('@/components/sections/Statistics'), { ssr: false });
const GitHub = dynamic(() => import('@/components/sections/GitHub'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const AIChat = dynamic(() => import('@/components/AIChat'), { ssr: false });
const ThemeSwitcher = dynamic(() => import('@/components/ThemeSwitcher'), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen loading={loading} />
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Statistics />
        <GitHub />
        <Contact />
      </main>
      <Footer />
      <AIChat />
      <ThemeSwitcher />
    </>
  );
}
