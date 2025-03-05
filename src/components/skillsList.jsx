'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useIdiom } from '@/provider/idiomProvider';

export const textTransition = "transition-all duration-200 ease-in-out hover:text-blue-800 hover:scale-105";

function SkillsList() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState([]);
  const scrollRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false); 

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/lang/${idiom}.json`);
      const data = await res.json();
      setTranslation(data.skills);
    };
    loadTranslations();
  }, [idiom]);

  const duplicateSkills = () => {
    return [...t, ...t];
  };

  const skills = duplicateSkills();

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current && !isMouseDown) {
        scrollRef.current.scrollLeft += 2; 
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [isMouseDown]);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-hidden py-5 gap-6 sm:gap-10 px-4 w-full no-select"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
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
    </div>
  );
}

export default SkillsList;
