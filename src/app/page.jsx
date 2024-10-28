'use client';

import Image from "next/image";
import profilePhoto from '/public/images/profile.png';
import galaxy from '/public/backgrounds/galaxy.png';
import galaxyMobile from '/public/backgrounds/galaxy-mobile.png';
import HabilitiesList from "@/components/HabilitiesList";
import { useIdiom } from "@/provider/idiomProvider";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/languageSwitcher";
import SkillsList from "@/components/skillsList";
import Footer from "@/components/footer";
import ProjectsList from "@/components/projectsList";

export default function Home() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState({});
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/lang/${idiom}.json`);
      const data = await res.json();
      setTranslation(data);
    };
    loadTranslations()
  },[idiom])

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else (
      setIsMobile(false)
    )
  },[])

  const defaultTranslation = {
    profile: {
      profile_alt: "Profile photo",
      name: "Antoniel Zeferio",
      job_title: "Front End Developer",
      description: "I am a front end developer looking for the first experience."
    }
  };

  const translation = Object.keys(t).length > 0 ? t : defaultTranslation;

  return (
    <>
      <section
        className="w-full min-h-[90vh]"
        style={{
          backgroundImage: `url(${isMobile ? galaxyMobile.src : galaxy.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          imageRendering: 'crisp-edges'
        }}
      >
        <LanguageSwitcher />
        <div className="md:flex flex-row-reverse px-4 md:px-8 items-center justify-center gap-4 md:gap-6">
          <figure className="max-w-72 lg:max-w-96 min-w-60 m-auto md:m-0">
            <Image
              data-aos="fade-up"
              src={profilePhoto}
              alt={translation.profile.profile_alt}
              width={600}
              height={750}
              priority
              className="rounded-md shadow-custom-white"
            />
          </figure>

          <article className="text-white mt-5 md:mt-0">
            <h1
              className="font-fontProsto text-2xl md:text-3xl lg:text-5xl uppercase text-center"
              data-aos="fade-right"
            >
              {translation.profile.name}
            </h1>
            <h3
              className="font-fontDmMono capitalize text-center font-medium text-xl md:text-2xl lg:text-3xl"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              {translation.profile.job_title}
            </h3>
            <p
              className="indent-2 max-w-[700px] mt-5 p-2 text-justify md:text-base lg:text-lg"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="1200"
            >
              {translation.profile.description}
            </p>
          </article>
        </div>
        <HabilitiesList />
      </section>
      <section className="bg-gradient-to-r from-indigo-900 via-violet-950 to-fuchsia-950 p-6 rounded-lg shadow-md">
        <h5 className="text-2xl font-serif font-semibold indent-4 mb-4">
          {idiom == "pt" ? 'Competências' : 'Skills'}
        </h5>
        <SkillsList />
      </section>
      <section
        style={{
          backgroundImage: `url(${galaxy.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          imageRendering: 'crisp-edges'
        }}
      >
        <ProjectsList/>
      </section>
      <Footer />
      <p className="hidden">icones de linguagem por <a target="_blank" href="https://icons8.com">Icons8</a></p>
    </>
  );
}
