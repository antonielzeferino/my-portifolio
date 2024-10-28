'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useIdiom } from '@/provider/idiomProvider';

export const textTransition = "transition-all duration-200 ease-in-out hover:text-blue-800 hover:scale-105";

function SkillsList() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState([]);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/lang/${idiom}.json`);
      const data = await res.json();
      setTranslation(data.skills);
    };
    loadTranslations()
  }, [idiom])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.classList.add('cursor-grabbing');
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;

    if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2;
    } else if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
      scrollRef.current.scrollLeft = 0;
    }
  };

  const duplicateSkills = () => {
    return [...t, ...t];
  };

  const skills = duplicateSkills();
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  return (
    <div className="relative">
      {isMobile ? (
        <div className="flex justify-between mt-4 md:hidden">
          <button
            onClick={handlePrev}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-700"
          >
            {idiom == "pt" ? 'Anterior' : 'Previous'}
          </button>

          <button
            onClick={handleNext}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-700"
          >
            {idiom == "pt" ? 'Próximo' : 'Next'}
          </button>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex overflow-scroll lg:overflow-hidden py-5 gap-6 sm:gap-10 px-4 w-full cursor-grab no-select"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {duplicateSkills().map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 400}
              className="bg-gray-800/50 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 min-w-[250px]"
            >
              <h5 className={`text-xl font-semibold text-blue-600 mb-2 text-center ${textTransition}`}>
                {skill.title}
              </h5>
              <p className="text-center text-gray-200">{skill.description}</p>
            </div>
          ))}
        </div>
      )}
      {isMobile && duplicateSkills().length > 0 && (
        <div className="mt-4 flex justify-center">
          <div className="bg-gray-800/50 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 min-w-[250px]">
            <h5 className={`text-xl font-semibold text-blue-600 mb-2 ${textTransition}`}>
              {duplicateSkills()[currentIndex]?.title}
            </h5>
            <p className="text-center text-gray-200">{duplicateSkills()[currentIndex]?.description}</p>
          </div>
        </div>
      )}

    </div>

  );
}

export default SkillsList;