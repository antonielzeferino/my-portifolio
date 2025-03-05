import React, { useEffect, useState } from 'react';
import { useIdiom } from '@/provider/idiomProvider';

function Footer() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/lang/${idiom}.json`);
      const data = await res.json();
      setTranslation(data);
    };
    loadTranslations()
  },[idiom])

  return (
    <footer className="text-white py-14 px-2 bg-gradient-to-r from-purple-800 to-blue-700" >
      <h2 className="text-xl indent-2">{t.footer?.contact?.title}</h2>
      <div className="flex justify-center flex-wrap gap-2 mt-2 m-auto">
        {t.footer?.contact?.links?.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            className="text-white hover:underline py-2 px-4 w-28 text-center bg-blue-600 hover:bg-purple-600/50 hover:scale-105 rounded-md"
            target='_blank'
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
