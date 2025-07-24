import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 bg-black backdrop-blur-xl text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-2">Khushi Anand</h2>
          <p className="text-sm text-gray-300 max-w-sm">

          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start md:items-end space-y-2 text-sm">
          <div className="flex gap-5">
            <a href="mailto:khushianand009@gmail.com" className="hover:text-yellow-400 transition">Email</a>
            <a href="https://www.linkedin.com/in/k7ushi/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">LinkedIn</a>
            <a href="https://github.com/k7ushi" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition">GitHub</a>
            <a href="/Khushi-Anand-Resume.pdf" className="hover:text-yellow-400 transition">Resume</a>
          </div>
          <p className="text-xs text-gray-500 mt-3">&copy; {new Date().getFullYear()} Khushi Anand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
