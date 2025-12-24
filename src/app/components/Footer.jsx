'use client';
import { assets } from '../../../assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => setMounted(true), []);

  // Show buttons when user scrolls down 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/201027254964', '_blank'); // رقم الشركة
  };

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <>
      {/* Footer */}
      <div className={`pt-2 transition-all duration-500 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="text-center">
          <Image
            key={theme}
            src={assets.logo_usry}
            alt="logo"
            className="w-36 mx-auto mb-1 transition-all duration-500"
            priority
          />

          <div className="w-max flex items-center gap-3 mb-2 mx-auto">
            <Image
              key={theme}
              src={assets.mail_icon}
              alt="mail icon"
              className="w-6 transition-all duration-300"
            />
            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-500">
              KlyroTech@outlook.com
            </span>
          </div>
        </div>

        <div
          key={theme}
          className={`w-full px-6 py-6 flex flex-col md:flex-row items-center justify-between 
            transition-colors duration-500 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
        >
          <p
            className={`text-sm mb-4 md:mb-0 transition-colors duration-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            © 2025 KlyroTech. All rights reserved.
          </p>

          <ul className="flex gap-4 px-8">
            <li>
              <a
                key={`github-${theme}`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Ahmed-Mohamed-Yousry"
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-purple-400"
                    : "text-gray-700 hover:text-purple-500"
                }`}
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                key={`linkedin-${theme}`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ahmed-yousry-senior-media-buyer/"
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                key={`x-${theme}`}
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/AhmedY75370"
                className={`transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-blue-300"
                    : "text-gray-700 hover:text-blue-400"
                }`}
              >
                X
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Scroll Buttons */}
      {showButtons && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
{/* Scroll to Top */}
{/* Scroll to Top */}
<button
  onClick={scrollToTop}
  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full shadow-lg
             bg-[#ada1f9] hover:opacity-90 transition-all duration-300 text-white dark:text-black text-2xl md:text-4xl lg:text-5xl font-extrabold"
  title="Back to Top"
>
  ↑
</button>

{/* WhatsApp */}
<button
  onClick={openWhatsApp}
  className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 rounded-full shadow-lg
             bg-green-500 hover:bg-green-400 transition-all duration-300"
  title="Contact via WhatsApp"
>
  <Image src={assets.openWhatsApp} alt="WhatsApp" className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"/>
</button>

        </div>
      )}
    </>
  );
};

export default Footer;
