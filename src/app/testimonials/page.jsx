'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  testimonialsData,
  digitalMarketingTestimonials,
} from '../../../assets/assets';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  MapPin,
  Code,
  TrendingUp,
} from 'lucide-react';

const TestimonialsPage = () => {
  const [current, setCurrent] = useState(0);
  const [currentMarketing, setCurrentMarketing] = useState(0);

  const nextSlide = (setFn, len) => setFn((prev) => (prev + 1) % len);
  const prevSlide = (setFn, len) => setFn((prev) => (prev - 1 + len) % len);

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}
      />
    ));

  const TestimonialCarousel = ({
    data,
    current,
    setCurrent,
    next,
    prev,
    title,
    icon,
  }) => {
    const len = data.length;

    return (
      <div className="relative mb-20">

        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 mb-6"
          >
            {icon}
            <span className="font-Ovo text-[#7768c3] dark:text-[#ada1f9] text-lg">
              {title}
            </span>
          </motion.div>
        </div>

        <div className="relative flex justify-center items-center w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">

          {/* Navigation Buttons */}
          <button
            onClick={() => prev(setCurrent, len)}
            className="absolute sm:left-0 -left-8 z-30 p-3 bg-[#ada1f9] rounded-xl shadow-lg hover:scale-110 transition-all"
          >
            <ChevronLeft size={24} className="text-white dark:text-[#11001f]" />
          </button>

          <button
            onClick={() => next(setCurrent, len)}
            className="absolute sm:right-0 -right-8 z-30 p-3 bg-[#ada1f9] rounded-xl shadow-lg hover:scale-110 transition-all"
          >
            <ChevronRight size={24} className="text-white dark:text-[#11001f]" />
          </button>

          <div className="relative w-full max-w-5xl h-full">
            <AnimatePresence mode="wait">
              {data.map((t, i) => {
                if (i !== current) return null;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                    className="relative w-full h-full bg-white dark:bg-[#11001f] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl flex flex-col md:flex-row gap-6 p-4 md:p-6 group"
                  >
                    {/* Image */}
                    <div className="md:w-1/2 flex justify-center items-center">
                      <img
                        src={t.bgImage}
                        alt={t.name}
                        className="max-w-full max-h-[400px] object-contain rounded-2xl shadow-md"
                        onError={(e) => {
                          e.target.src =
                            'https://via.placeholder.com/600x400/ada1f9/fff?text=Certificate';
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="md:w-1/2 flex flex-col justify-between p-4 md:p-0">
                      <div>
                        <h3 className="font-Ovo text-xl font-semibold text-gray-900 dark:text-white mb-1">
                          {t.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-300 mb-3">{t.company}</p>
                        <div className="flex gap-1 mb-4">{renderStars(t.rating || 5)}</div>
                        <p className="text-gray-600 dark:text-gray-400 font-Ovo leading-relaxed">
                          {t.description}
                        </p>
                      </div>

                      <div className="flex gap-4 mt-4 flex-wrap">
                        <div className="flex items-center gap-2 text-[#ada1f9]">
                          <Award size={16} />
                          <span className="text-sm font-Ovo">Verified Credential</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#ada1f9]">
                          <MapPin size={16} />
                          <span className="text-sm font-Ovo">Online Certification</span>
                        </div>
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
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current
                  ? 'bg-[#ada1f9] scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen mt-16 py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-Ovo text-gray-900 dark:text-white mb-4"
          >
            Professional Certifications
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-Ovo max-w-2xl mx-auto">
            Verified credentials & hands-on certifications that reflect expertise and growth.
          </p>
        </div>

        <TestimonialCarousel
          data={testimonialsData}
          current={current}
          setCurrent={setCurrent}
          next={nextSlide}
          prev={prevSlide}
          title="Programming Certifications"
          icon={<Code size={20} className="text-[#7768c3]" />}
        />

        <TestimonialCarousel
          data={digitalMarketingTestimonials}
          current={currentMarketing}
          setCurrent={setCurrentMarketing}
          next={nextSlide}
          prev={prevSlide}
          title="Digital Marketing Certifications"
          icon={<TrendingUp size={20} className="text-[#7768c3]" />}
        />

      </div>
    </main>
  );
};

export default TestimonialsPage;
