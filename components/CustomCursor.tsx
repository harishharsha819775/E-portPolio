'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let outerX = 0, outerY = 0;
    let innerX = 0, innerY = 0;
    let mouseX = 0, mouseY = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      innerX = e.clientX;
      innerY = e.clientY;
      inner.style.left = `${innerX - 4}px`;
      inner.style.top = `${innerY - 4}px`;
    };

    const animate = () => {
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;
      outer.style.left = `${outerX - 20}px`;
      outer.style.top = `${outerY - 20}px`;
      animId = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => outer.classList.add('cursor-hover');
    const onMouseLeaveLink = () => outer.classList.remove('cursor-hover');

    document.addEventListener('mousemove', onMouseMove);
    animate();

    const links = document.querySelectorAll('a, button, [role="button"], .btn-glow, .btn-solid');
    links.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer" />
      <div ref={innerRef} className="cursor-inner" />
    </>
  );
}
