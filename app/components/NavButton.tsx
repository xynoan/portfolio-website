'use client'

import { useState } from "react";
import Link from "next/link";

export default function NavButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="nav-menu md:hidden">
        <button
          onClick={() => {
            toggleMenu();
          }}
          className="minecraft-btn h-12 w-12 rounded-md text-xl"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Navigation Menu Popup */}
        {isMenuOpen && (
          <div className="absolute bottom-16 right-0 w-40 animate-fadeIn">
            <div className="flex flex-col gap-2">
              <Link href="/" className="minecraft-btn block text-center">
                Home
              </Link>
              <Link href="/my-story" className="minecraft-btn block text-center">
                My Story
              </Link>
              <Link href="/imaginations" className="minecraft-btn block text-center">
                Imaginations
              </Link>
              <Link href="/contact" className="minecraft-btn block text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Tablet/Desktop Navigation */}
      <div className="hidden md:block absolute top-6 right-8 z-20">
        <nav className="galaxy-nav">
          <ul className="flex space-x-6">
            {['Home', 'My Story', 'Imaginations', 'Contact'].map((item, index) => (
              <li key={index} className="nav-item">
                <Link 
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase().replace(' ', '-')}`} 
                  className="relative group"
                >
                  <span className="nav-text px-4 py-2 text-white font-medium tracking-wider minecraft-text transition-all duration-300
                                   relative z-10 hover:text-[#8a2be2]">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#9370db] to-[#8a2be2] 
                                 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <div className="absolute -inset-1 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-lg 
                                blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}