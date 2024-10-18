'use client';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfPageHeight = document.body.scrollHeight / 2;

      if (scrollPosition > halfPageHeight) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full h-14 border-b p-4 bg-white flex justify-between items-center transition-shadow duration-300 ${
        hasScrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      {/* Logo - Scroll to top when clicked */}
      <div
        className="text-lg font-semibold hover:text-gray-600 transition-colors cursor-pointer"
        onClick={scrollToTop}
      >
        Logo
      </div>

      <a
        href="https://harshit2608.github.io/portfolio/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg hover:text-gray-600 transition-colors cursor-pointer"
      >
        Portfolio
      </a>
    </header>
  );
};

export default Navbar;
