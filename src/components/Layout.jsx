import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'; 
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Layout() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollContainerRef.current,
      content: scrollContainerRef.current,
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={scrollContainerRef} className="font-sans bg-white text-black h-screen overflow-y-auto">
      <Navbar />
      <main className="pt-20">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
