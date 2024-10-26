'use client';

import "./globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from '@/public/images/profile.png'
import galaxy from '@/public/backgrounds/galaxy.png'

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <html lang="en">
        <head>
          <title>Antoniel Zeferino de Melo</title>
          <meta name="description" content="Programador front-end em busca de uma primeira oportunidade." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preload" href={profile.src} as="image" />
          <link rel="preload" href={galaxy.src} as="image" />
        </head>
        <body className="antialiased">
          {children}
        </body>
      </html>
    </>
  );
}