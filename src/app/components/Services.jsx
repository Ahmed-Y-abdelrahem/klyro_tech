'use client';
import { assets, serviceData } from '../../../assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes";

const Services = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <div
      id="services"
      className="w-full flex justify-center px-4 mt-20 mb-10 scroll-mt-24"
    >
      {/* Section Wrapper */}
      <div
        className={`
          w-full max-w-7xl
          flex flex-col justify-center items-center text-center gap-6
          rounded-3xl
          px-6 py-14
          ${isDarkMode ? 'bg-black/5' : 'bg-white/10'} backdrop-blur-md
          border border-gray-200 dark:border-gray-700
          shadow-lg bg-opacity-15
        `}
      >
        <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300">
          What We Offer
        </p>

        <h2 className="text-4xl font-bold font-Ovo text-black dark:text-white">
          Our Services
        </h2>

        <p className="text-center max-w-5xl text-gray-500 font-Ovo mt-4 dark:text-gray-300">
          At KlyroTech, we deliver end-to-end digital solutions designed to help
          businesses scale efficiently.
          <br />
          Our services combine data-driven marketing strategies, high-impact media
          buying, and modern web development to drive measurable results.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-6">
          {serviceData.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="
                flex flex-col rounded-xl bg-[#ada1f9] shadow-lg p-6
                transition-all duration-300 ease-in-out min-h-[200px]
                hover:scale-105 hover:border-t-2 hover:border-r-2 hover:border-black
                dark:hover:border-white
              "
            >
              <Image
                src={icon}
                alt={title}
                className="w-12 h-12 rounded-md object-contain mb-4"
              />

              <h3 className="text-lg font-Outfit mb-2 text-white dark:text-black">
                {title}
              </h3>

              <p className="text-sm flex-1 leading-6 text-white dark:text-gray-700">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;
