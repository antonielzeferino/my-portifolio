import React from 'react';
import { useIdiom } from '@/provider/idiomProvider';
import brIcon from "@/public/icons/icon-brazil.png";
import usaIcon from "@/public/icons/icon-usa.png";
import Image from 'next/image';

const LanguageSwitcher = () => {
  const { idiom, setIdiom } = useIdiom();

  const handleLanguageChange = (language) => {
    setIdiom(language);
  };

  return (
    <div className="z-50 sticky top-5 right-5 flex w-max rounded-full p-1 gap-2 bg-gradient-to-r from-purple-800/70 to-indigo-800/70 shadow-md" style={{ marginLeft: 'auto' }}>
      <button
        onClick={() => handleLanguageChange('pt')}
        className={`p-1 rounded-full transition-transform transform hover:scale-105 ${
          idiom === 'pt' ? 'bg-purple-400 bg-opacity-60 border-2 border-purple-200' : 'bg-transparent'
        }`}
        style={{
          backdropFilter: 'blur(5px)',
        }}
      >
        <Image src={brIcon} alt="Brazilian Portuguese" width={25} height={25}  priority={false}/>
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`p-1 rounded-full transition-transform transform hover:scale-105 ${
          idiom === 'en' ? 'bg-purple-400 bg-opacity-60 border-2 border-purple-200' : 'bg-transparent'
        }`}
        style={{
          backdropFilter: 'blur(5px)',
        }}
      >
        <Image src={usaIcon} alt="English" width={25} height={25} priority={false}/>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
