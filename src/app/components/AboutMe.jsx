'use client';
import { assets } from '../../../assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";

const AboutUs = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <div
      id="about"
      className="w-full flex flex-col justify-center items-center text-center gap-6 mt-20 mb-10 px-4 scroll-mt-24"
    >
      
      <p className="font-Ovo text-lg text-gray-500 dark:text-gray-300">
        Who We Are
      </p>

      <h2 className="text-4xl font-bold font-Ovo text-black dark:text-white">
        About KlyroTech
      </h2>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-8 mt-8">
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-md font-Ovo leading-relaxed text-gray-600 dark:text-gray-400">
            KlyroTech is a results-driven digital company specializing in
            <strong> digital marketing, sales solutions, and web development</strong>.
            <br />
            Since 2021, we’ve helped brands grow through data-driven strategies,
            high-performing ad campaigns, and scalable websites.
            <br />
            Our team combines marketing expertise with modern technologies to
            deliver measurable business growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-start">
            {/* Experience */}
            <div className="flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 min-h-[180px] transition-all duration-300 ease-in-out hover:border-t-2 hover:border-r-2 hover:border-black dark:hover:border-white">
              <Image
                src={isDarkMode ? assets.edu_icon : assets.edu_icon_dark}
                className="w-8 h-8 rounded-md object-contain mb-4"
                alt="experience icon"
              />
              <h3 className="text-lg font-Outfit my-2 text-white dark:text-black">
                Experience
              </h3>
              <p className="text-sm flex-1 leading-5 text-white dark:text-gray-700">
                Proven expertise since 2021 in marketing, sales, and web solutions
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 min-h-[180px] transition-all duration-300 ease-in-out hover:border-t-2 hover:border-r-2 hover:border-black dark:hover:border-white">
              <Image
                src={isDarkMode ? assets.code_icon : assets.code_icon_dark}
                className="w-8 h-8 rounded-md object-contain mb-4"
                alt="technologies icon"
              />
              <h3 className="text-lg font-Outfit my-2 text-white dark:text-black">
                Technologies
              </h3>
              <p className="text-sm flex-1 leading-5 text-white dark:text-gray-700">
                WordPress, MERN Stack, React, Next.js, Node.js
              </p>
            </div>

            {/* Projects */}
            <div className="flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 min-h-[180px] transition-all duration-300 ease-in-out hover:border-t-2 hover:border-r-2 hover:border-black dark:hover:border-white">
              <Image
                src={isDarkMode ? assets.project_icon : assets.project_icon_dark}
                className="w-8 h-8 rounded-md object-contain mb-4"
                alt="projects icon"
              />
              <h3 className="text-lg font-Outfit my-2 text-white dark:text-black">
                Projects
              </h3>
              <p className="text-sm flex-1 leading-5 text-white dark:text-gray-700">
                Delivered 10+ successful projects across multiple industries
              </p>
            </div>

            {/* Marketing */}
            <div className="flex flex-col rounded bg-[#ada1f9] shadow-sm p-4 min-h-[180px] transition-all duration-300 ease-in-out hover:border-t-2 hover:border-r-2 hover:border-black dark:hover:border-white">
              <Image
                src={isDarkMode ? assets.marketing_icon_dark : assets.marketing_icon}
                className="w-8 h-8 rounded-md object-contain mb-4"
                alt="marketing icon"
              />
              <h3 className="text-lg font-Outfit my-2 text-white dark:text-black">
                Marketing
              </h3>
              <p className="text-sm flex-1 leading-5 text-white dark:text-gray-700">
                Meta Ads, Google Ads, LinkedIn Ads, SEO & content strategy
              </p>
            </div>
          </div>

          <p className="font-Ovo text-start text-gray-500 dark:text-gray-300">
            Tools & Platforms We Use
          </p>

          <div className="flex flex-wrap justify-start gap-4">
            <Image alt="" src={assets.vscode} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.mongodb} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.firebase} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.git} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.meta} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.google} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.linkedIn} className="w-11 h-11 rounded border p-1 object-contain" />
            <Image alt="" src={assets.ashref} className="w-11 h-11 rounded border p-1 object-cover object-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
