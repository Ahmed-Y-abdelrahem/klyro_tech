'use client';

import Image from 'next/image';
import { assets } from '../../../assets/assets';

const Header = () => {
  return (
    <div
      id="top"
      className="w-full flex flex-col justify-center items-center text-center gap-6 mt-48 mb-10 scroll-mt-24"
    >
      {/* Company Logo */}
      <Image
        src={assets.klyrotech_logo || assets.my_image}
        alt="KlyroTech Logo"
        className="w-60 h-auto aspect-square rounded-full transition-all duration-500 ease-in-out"
      />

      {/* Company Intro */}
      <div className="flex items-center gap-3">
        <h6 className="text-2xl font-bold font-Ovo text-gray-500 dark:text-gray-300">
          Welcome to KlyroTech
        </h6>
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </div>

      {/* Headline */}
      <div className="flex flex-col gap-6 items-center">
        <h1 className="md:w-7/12 w-10/12 text-xl font-bold font-Outfit text-black dark:text-white">
          Digital Marketing, Sales & Full-Stack Solutions That Drive Growth
        </h1>

        <p className="md:w-6/12 w-10/12 text-lg font-Ovo text-gray-500 dark:text-gray-300">
          KlyroTech is a results-driven digital company specializing in marketing
          strategy, media buying, and MERN stack web development or WordPress to help brands
          scale efficiently.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
    </div>
  );
};

export default Header;
