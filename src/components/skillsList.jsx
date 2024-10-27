'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useIdiom } from '@/provider/idiomProvider';
import en from '@/public/lang/en.json'; 
import pt from '@/public/lang/pt.json'; 

export const textTransition = "transition-all duration-200 ease-in-out hover:text-purple-900 hover:scale-105";

function SkillsList() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState([]);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const translation = idiom === "pt" ? pt : en;
    setTranslation(translation.skills || []);
  }, [idiom]);

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

  return (
    <div 
      ref={scrollRef}
      className="flex overflow-hidden py-5 gap-6 sm:gap-10 px-4 w-full cursor-grab no-select" 
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {duplicateSkills().map((skill, index) => (
        <div key={index} className="bg-gray-800/50 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 min-w-[250px]">
          <h5 className={`text-xl font-semibold text-blue-600 mb-2 ${textTransition}`}>
            {skill.title}
          </h5>
          <p className="text-center text-gray-200">{skill.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
