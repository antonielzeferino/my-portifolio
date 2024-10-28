const cardStyle = "relative w-full h-auto max-w-[400px] max-h-[400px] border-blue-600 border-2 rounded-xl overflow-hidden group";

function ProjectsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center w-full min-h-[500px] p-4">
      <div className={cardStyle}>
        <video
          src="/projects/store.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-xl"
        ></video>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent/90 to-transparent/40 opacity-100 group-hover:h-full group-hover:opacity-100 transition-all duration-300 rounded-b-xl flex flex-wrap  items-end justify-center">
          <p className="text-white font-bold text-md md:text-xl text-center p-2">Project Title 1</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam veritatis soluta nulla? Unde aut iure asperiores voluptate a totam esse atque nesciunt officia laudantium sed architecto, qui ea quos?</p>
        </div>
      </div>

      <div className={cardStyle}>
        <video
          src="/projects/save-nature.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-xl"
        ></video>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent/90 to-transparent/40 opacity-100 group-hover:h-full group-hover:opacity-100 transition-all duration-300 rounded-b-xl flex flex-wrap  items-end justify-center">
          <p className="text-white font-bold text-md md:text-xl text-center p-2">Project Title 2</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam veritatis soluta nulla? Unde aut iure asperiores voluptate a totam esse atque nesciunt officia laudantium sed architecto, qui ea quos?</p>
        </div>
      </div>

      <div className={cardStyle}>
        <video
          src="/projects/store.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-xl"
        ></video>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent/90 to-transparent/40 opacity-100 group-hover:h-full group-hover:opacity-100 transition-all duration-300 rounded-b-xl flex flex-wrap  items-end justify-center">
          <p className="text-white font-bold text-md md:text-xl text-center p-2">Project Title 1</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam veritatis soluta nulla? Unde aut iure asperiores voluptate a totam esse atque nesciunt officia laudantium sed architecto, qui ea quos?</p>

        </div>
      </div>

      <div className={cardStyle}>
        <video
          src="/projects/save-nature.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-xl"
        ></video>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent/90 to-transparent/40 opacity-100 group-hover:h-full group-hover:opacity-100 transition-all duration-300 rounded-b-xl flex flex-wrap items-end justify-center p-2">
          <p className="text-white font-bold text-md md:text-xl text-center p-2">Project Title 2</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nam veritatis soluta nulla? Unde aut iure asperiores voluptate a totam esse atque nesciunt officia laudantium sed architecto, qui ea quos?</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
