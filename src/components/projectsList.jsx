import { useIdiom } from "@/provider/idiomProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const cardStyle = "relative w-full h-auto max-w-[400px] max-h-[400px] border-blue-600 border-2 rounded-xl overflow-hidden group";

function ProjectsList() {
  const { idiom } = useIdiom();
  const [t, setTranslation] = useState({});
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/lang/${idiom}.json`);
      const data = await res.json();
      setTranslation(data);
    };
    loadTranslations();
  }, [idiom]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="gap-8 flex flex-wrap lg:flex-nowrap w-full min-h-[500px] p-4 items-center justify-center px-4">
      {t.projects &&
        t.projects.map((project, index) => (
          <div
            key={index}
            className={`${cardStyle} ${loadedImages[index] ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
          >
            <Image
              src={project.src}
              alt={project.title}
              width={600}
              height={600}
              onLoadingComplete={() => handleImageLoad(index)}
            />
            <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-black via-transparent/90 to-transparent/40 opacity-0 group-hover:h-full group-hover:opacity-100 transition-all duration-700 rounded-b-xl flex flex-wrap items-end justify-center p-2">
            <Link href={project.link} target="_blank">

              <h4 className="text-white font-bold text-md md:text-xl text-center p-2 underline">
                {project.title}
              </h4>
              <p className="indent-4 text-justify px-2 project-description">
                {project.description}
              </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProjectsList;
