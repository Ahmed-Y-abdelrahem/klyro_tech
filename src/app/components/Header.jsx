'use client';

import Image from 'next/image';
import { assets } from '../../../assets/assets';

const Header = () => {
  return (
    <div
      id="top"
      className="w-full flex flex-col justify-center items-center text-center gap-6 mt-48 mb-10 scroll-mt-24"
    >
      {/* Company Logo - 3D Sphere Effect */}
      <div className="relative group perspective-container mb-4">
        {/* Outer Glow Ring - Orbiting Effect */}
        <div className="absolute inset-0 w-72 h-72 -left-6 -top-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7768c3] via-[#ada1f9] to-[#5f51bd] animate-orbit blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
        </div>
        
        {/* Main 3D Sphere Container */}
        <div className="relative w-60 h-60 animate-float-sphere">
          {/* Sphere Base with 3D Transform */}
          <div className="absolute inset-0 rounded-full transform-gpu animate-rotate-slow"
               style={{
                 transformStyle: 'preserve-3d',
                 transform: 'rotateX(5deg) rotateY(-5deg)'
               }}>
            
            {/* Image Layer - Wrapped on Sphere */}
            <div className="absolute inset-0 rounded-full overflow-hidden animate-subtle-distortion">
              <Image
                src={assets.klyrotech_logo || assets.my_image}
                alt="KlyroTech Logo"
                fill
                className="object-cover scale-110 transition-transform duration-1000 group-hover:scale-125"
                style={{
                  filter: 'contrast(1.1) saturate(1.1)'
                }}
              />
            </div>
            
            {/* Spherical Lighting - Top Highlight */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 via-transparent to-transparent opacity-60"
                 style={{
                   background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.5) 0%, transparent 50%)'
                 }}></div>
            
            {/* Spherical Shadow - Bottom Darkening */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-black/30"
                 style={{
                   background: 'radial-gradient(circle at 50% 80%, rgba(0,0,0,0.4) 0%, transparent 70%)'
                 }}></div>
            
            {/* Fresnel Effect - Edge Lighting */}
            <div className="absolute inset-0 rounded-full"
                 style={{
                   background: 'radial-gradient(circle at center, transparent 45%, rgba(119,104,195,0.3) 70%, rgba(173,161,249,0.5) 85%, transparent 100%)'
                 }}></div>
            
            {/* Specular Highlight - Glossy Reflection */}
            <div className="absolute top-6 left-10 w-16 h-16 rounded-full bg-white/30 blur-2xl animate-shimmer"></div>
            
            {/* Glass Reflection Effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
              <div className="absolute -top-1/2 left-0 right-0 h-full bg-gradient-to-br from-white/60 via-transparent to-transparent transform rotate-[-15deg] animate-reflection-slide"></div>
            </div>
            
            {/* Interactive Hover Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7768c3]/0 via-[#ada1f9]/0 to-[#5f51bd]/0 group-hover:from-[#7768c3]/20 group-hover:via-[#ada1f9]/10 group-hover:to-[#5f51bd]/20 transition-all duration-700"></div>
            
            {/* Border with Depth */}
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-transparent dark:ring-gray-700/30"></div>
          </div>
          
          {/* Cast Shadow Below Sphere */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 bg-black/20 dark:bg-black/40 rounded-full blur-2xl animate-shadow-pulse"></div>
        </div>
        
        {/* Ambient Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-8 left-8 w-1 h-1 bg-[#ada1f9] rounded-full animate-particle-1 opacity-60"></div>
          <div className="absolute top-16 right-12 w-1 h-1 bg-[#7768c3] rounded-full animate-particle-2 opacity-60"></div>
          <div className="absolute bottom-12 left-16 w-1 h-1 bg-[#5f51bd] rounded-full animate-particle-3 opacity-60"></div>
        </div>
      </div>

      {/* Company Intro */}
      <div className="flex justify-start items-center gap-3">
        <h6 className="text-2xl font-bold font-Ovo text-gray-500 dark:text-gray-300">
         Grow Smarter with KlyroTech
        </h6>
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </div>

      {/* Headline */}
      <div className="flex flex-col gap-6 items-center">
        <h1 className="md:w-7/12 w-10/12 text-xl font-bold font-Outfit text-black dark:text-white">
         Marketing, Sales & Web Development That Deliver Real Results
        </h1>

        <p className="md:w-6/12 w-10/12 text-lg font-Ovo text-gray-500 dark:text-gray-300">
         At KlyroTech, we empower businesses to grow through smart digital marketing,
        effective sales solutions, and scalable web development. 
        <br/>With hands-on experience since 2021, we combine media buying, marketing strategy, and full-stack development (MERN & WordPress) to turn ideas into measurable growth.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center flex-col sm:flex-row gap-4 mt-4">
        {/* Contact */}
        <a
          href="#contact"
          className="w-max flex justify-center items-center border-[0.8px] shadow-lg shadow-[#7768c3]
            bg-[#ada1f9] rounded-full p-4 text-white dark:text-[#11001f]
            font-Ovo text-lg gap-3 hover:opacity-80 transition duration-500"
        >
          <p className="font-Outfit text-lg animate-pulse">Get in Touch</p>

          <Image
            src={assets.right_arrow_bold}
            alt=""
            className="w-6 animate-bounce dark:hidden"
          />
          <Image
            src={assets.right_arrow_bold_dark}
            alt=""
            className="w-6 animate-bounce hidden dark:block"
          />
        </a>

        {/* Company Profile / Portfolio */}
        <a
          href="/KlyroTech-Company-Profile.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-full p-3 gap-4 flex items-center
            bg-white text-[#5f51bd] border-[#5f51bd]"
        >
          <p className="font-Outfit text-lg">Company Profile</p>
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 1000px;
        }
        
        /* Professional Floating Animation */
        @keyframes float-sphere {
          0%, 100% {
            transform: translateY(0px) rotateX(5deg) rotateY(-5deg);
          }
          50% {
            transform: translateY(-20px) rotateX(8deg) rotateY(-8deg);
          }
        }
        
        /* Subtle Continuous Rotation */
        @keyframes rotate-slow {
          0% {
            transform: rotateY(0deg) rotateX(5deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(5deg);
          }
        }
        
        /* Image Surface Distortion */
        @keyframes subtle-distortion {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          33% {
            transform: scale(1.02) rotate(1deg);
          }
          66% {
            transform: scale(0.98) rotate(-1deg);
          }
        }
        
        /* Orbiting Glow Effect */
        @keyframes orbit {
          0% {
            transform: rotate(0deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1.1);
          }
        }
        
        /* Shimmer Highlight */
        @keyframes shimmer {
          0%, 100% {
            opacity: 0.3;
            transform: translate(0, 0) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(10px, -5px) scale(1.1);
          }
        }
        
        /* Glass Reflection Movement */
        @keyframes reflection-slide {
          0%, 100% {
            transform: translateX(-20%) rotate(-15deg);
            opacity: 0.4;
          }
          50% {
            transform: translateX(20%) rotate(-15deg);
            opacity: 0.6;
          }
        }
        
        /* Shadow Breathing Effect */
        @keyframes shadow-pulse {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateX(-50%) scale(1.1);
            opacity: 0.3;
          }
        }
        
        /* Ambient Particle Animations */
        @keyframes particle-1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          50% {
            transform: translate(10px, -15px);
            opacity: 0.3;
          }
        }
        
        @keyframes particle-2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          50% {
            transform: translate(-15px, 10px);
            opacity: 0.3;
          }
        }
        
        @keyframes particle-3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          50% {
            transform: translate(12px, 12px);
            opacity: 0.3;
          }
        }
        
        .animate-float-sphere {
          animation: float-sphere 6s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 40s linear infinite;
        }
        
        .animate-subtle-distortion {
          animation: subtle-distortion 8s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 4s ease-in-out infinite;
        }
        
        .animate-reflection-slide {
          animation: reflection-slide 8s ease-in-out infinite;
        }
        
        .animate-shadow-pulse {
          animation: shadow-pulse 6s ease-in-out infinite;
        }
        
        .animate-particle-1 {
          animation: particle-1 5s ease-in-out infinite;
        }
        
        .animate-particle-2 {
          animation: particle-2 6s ease-in-out infinite 0.5s;
        }
        
        .animate-particle-3 {
          animation: particle-3 7s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
};

export default Header;