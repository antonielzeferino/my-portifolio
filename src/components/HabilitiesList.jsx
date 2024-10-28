'use client';

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useIdiom } from '@/provider/idiomProvider';
import en from '@/public/lang/en.json'; 
import pt from '@/public/lang/pt.json'; 

export const textTransition = "transition-all duration-200 ease-in-out hover:text-purple-700 hover:scale-105";

function HabilitiesList() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState({});

  useEffect(() => {
    const translation = idiom === "pt" ? pt : en;
    setTranslation(translation);
  }, [idiom]);

  return (
    <div className="flex flex-wrap gap-8 mt-10 p-4 justify-center items-center">
      {t.habilities && t.habilities.map((hability, index) => (
        <div 
          key={index} 
          data-aos="fade-right"
          data-aos-delay={index * 400}
          className="w-5/6 max-w-full sm:max-w-80 lg:max-w-sm h-auto rounded-lg bg-black/30 backdrop-blur-md border border-purple-500 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <h5 className="text-center text-blue-600 font-semibold mb-4">
            {hability.title}
          </h5>
          <ul className="space-y-2 cursor-default">
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
