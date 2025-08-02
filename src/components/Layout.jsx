import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Layout() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapperRef.current,
      content: contentRef.current,
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

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div ref={wrapperRef} className="font-sans bg-white text-black h-screen overflow-y-scroll">
      <div ref={contentRef} className="min-h-screen">
        <Navbar />
        <main className="pt-12 sm:pt-16 md:pt-20">

          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
