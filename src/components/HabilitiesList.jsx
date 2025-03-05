'use client';

import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { useIdiom } from '@/provider/idiomProvider'; 

export const textTransition = "transition-all duration-200 ease-in-out hover:text-purple-700 hover:scale-105";

function HabilitiesList() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/lang/${idiom}.json`);
      const data = await res.json();
      setTranslation(data);
    };
    loadTranslations()
  },[idiom]);

  return (
    <div className="flex flex-wrap md:grid md:grid-cols-3 gap-8 mt-10 p-4 justify-center items-center">
      {t.habilities && t.habilities.map((hability, index) => (
        <div 
          key={index} 
          data-aos="fade-right"
          data-aos-delay={index * 400}
          className="w-full h-auto rounded-lg bg-black/30 backdrop-blur-md border border-blue-700 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <h5 className="text-center text-blue-600 font-semibold mb-4">
            {hability.title}
          </h5>
          <ul className="cursor-default sm:grid sm:grid-cols-2 gap-y-2 md:grid-cols-1 sm:mx-auto p-4">
            {hability.content.map((el, idx) => (
              <li 
                key={idx} 
                className={`${textTransition} hover:font-medium hover:ps-4`}
              >
                <p>{el}</p> 
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default HabilitiesList;
