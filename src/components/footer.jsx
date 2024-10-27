import React, { useEffect, useState } from 'react';
import { useIdiom } from '@/provider/idiomProvider';
import en from "@/public/lang/en.json";
import pt from "@/public/lang/pt.json";
import techbg from '@/public/backgrounds/solid.png';

function Footer() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState({});

  useEffect(() => {
    const translation = idiom === "pt" ? pt : en;
    setTranslation(translation);
  }, [idiom]);

  return (
    <footer 
      className="text-white p-8 bg-blue-950"
      style={{
        backgroundImage: `url(${techbg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <h2 className="text-xl indent-2">{t.footer?.contact?.title}</h2>
      <div className="flex justify-evenly flex-wrap gap-4 mt-2 w-5/6 m-auto">
        {t.footer?.contact?.links?.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            className="text-white hover:underline p-2 px-4 bg-blue-600 hover:scale-105 rounded-md"
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
