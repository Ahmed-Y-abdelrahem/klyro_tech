'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { marketingResults, marketingStats } from '../../../assets/assets';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';

const MarketingCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const length = marketingResults.length;

  const nextSlide = () => setCurrentProject((prev) => (prev + 1) % length);
  const prevSlide = () =>
    setCurrentProject((prev) => (prev - 1 + length) % length);

  return (
    <div className="relative mb-16">
      <div className="relative h-[600px] sm:h-[500px] md:h-[600px] flex items-center justify-center">

        {/* Navigation Buttons - Outside Card */}
        <button
          onClick={prevSlide}
          className="absolute sm:left-0 -left-8 z-30 p-3 bg-[#ada1f9] rounded-xl shadow-lg hover:scale-110 transition-all"
        >
          <ChevronLeft size={24} className="text-white dark:text-[#11001f]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute sm:right-0 -right-8 z-30 p-3 bg-[#ada1f9] rounded-xl shadow-lg hover:scale-110 transition-all"
        >
          <ChevronRight size={24} className="text-white dark:text-[#11001f]" />
        </button>

        {/* Project Card */}
        <div className="relative w-full max-w-6xl h-full">
          <AnimatePresence mode="wait">
            {marketingResults.map((project, index) => {
              if (index !== currentProject) return null;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  className="relative w-full h-full bg-white dark:bg-[#11001f] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl flex flex-col md:flex-row p-4 md:p-8"
                >
                  {/* Campaign Image */}
                  <div className="md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
                    <img
                      src={project.afterImage || project.beforeImage}
                      alt={project.title}
                      className="rounded-2xl shadow-md max-h-[400px] w-full object-contain"
                      onError={(e) => {
                        e.target.src =
                          'https://via.placeholder.com/600x400/e0e0e0/555?text=Campaign+Image';
                      }}
                    />
                  </div>

                  {/* Project Details */}
                  <div className="md:w-1/2 flex flex-col justify-between md:pl-8">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-[#ada1f9]" size={20} />
                        <span className="font-Ovo text-[#ada1f9] text-sm">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold font-Ovo text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-3 bg-gray-100 dark:bg-gray-900 rounded-xl"
                          >
                            <div className="text-lg md:text-xl font-bold text-[#ada1f9] font-Ovo">
                              {value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-Ovo capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.platforms.map((pf) => (
                        <span
                          key={pf}
                          className="px-3 py-1 bg-[#ada1f9]/20 text-[#7768c3] dark:text-[#ada1f9] rounded-full text-sm font-Ovo"
                        >
                          {pf}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {marketingResults.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentProject(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentProject
                ? 'bg-[#ada1f9] scale-125'
                : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const MarketingPage = () => {
  return (
    <main className="min-h-screen mt-16 bg-white dark:bg-[#11001f] py-8 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold font-Ovo text-gray-900 dark:text-white mb-4"
          >
            Digital Marketing Results
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-Ovo max-w-2xl mx-auto">
            A showcase of marketing campaigns and strategies that delivered real measurable success.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {marketingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gray-100 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-[#7768c3] dark:text-[#ada1f9] font-Ovo">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-Ovo mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marketing Carousel */}
        <MarketingCarousel />
      </div>
    </main>
  );
};

export default MarketingPage;
