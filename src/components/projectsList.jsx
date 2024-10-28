import { useIdiom } from "@/provider/idiomProvider";
import React, { useEffect, useState } from "react";

const cardStyle = "relative w-full h-auto max-w-[400px] max-h-[400px] border-blue-600 border-2 rounded-xl overflow-hidden group";

function ProjectsList() {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center w-full min-h-[500px] p-4">
      {t.projects && t.projects.map((project, index) => (
        <div key={index} className={cardStyle}>
          <video
            src={project.src}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-xl"
          ></video>
          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent/90 to-transparent/40 opacity-100 group-hover:h-full group-hover:opacity-100 transition-all duration-300 rounded-b-xl flex flex-wrap items-end justify-center p-2">
            <p className="text-white font-bold text-md md:text-xl text-center p-2">{project.title}</p>
            <p className="text-justify">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsList;
