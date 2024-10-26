'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const habilities = [
  {
    title: 'Linguagens de Programação',
    content: ['JavaScript', 'TypeScript', 'HTML', 'CSS']
  }, {
    title: 'Frameworks e Bibliotecas',
    content: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap']
  }, {
    title: 'Práticas de Desenvolvimento',
    content: ['Progressive Web Apps (PWAs)', 'Responsividade e Design Mobile-First', 'SEO (otimização para motores de busca)', 'Integração com APIs RESTful']
  }
];

export const textTransition = "transition-all duration-200 ease-in-out hover:text-purple-900 hover:scale-105";

function HabilitiesList() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="flex flex-wrap gap-8 mt-10 p-4 justify-center items-center">
      {habilities.map((hability, index) => (
        <div 
          key={index} 
          data-aos="fade-right"
          data-aos-delay={index * 400}
          className="w-72 sm:w-xl lg:w-96 h-auto rounded-lg bg-black/10 backdrop-blur-md border border-purple-300 p-6 shadow-lg transition-transform duration-300 hover:scale-105"
        >
          <h5 className="text-center text-purple-800 font-semibold mb-4">{hability.title}</h5>
          <ul className="space-y-2">
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
