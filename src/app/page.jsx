import Image from "next/image";
import profile from '@/public/images/profile.svg'
import galaxy from '@/public/backgrounds/galaxy.png'
export default function Home() {
  return (
    <section 
      className="md:flex flex-row-reverse px-2 items-center justify-center gap-4 md:gap-8 w-full min-h-[90vh]"
      style={{
        backgroundImage: `url(${galaxy.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'  
      }}
    >
      <figure className="max-w-96 min-w-60 m-auto md:m-0">
        <Image
          data-aos="fade-up"
          src={profile}
          alt="Profile photo of Antoniel Zeferino"
          width={600}
          height={750}
          priority />
      </figure>
      <article className="text-white mt-5 md:mt-0">
        <h1
          className="font-fontProsto text-2xl md:3xl lg:text-5xl uppercase text-center "
          data-aos="fade-right"
        >
          Antoniel Zeferino
        </h1>
        <h3
          className="font-fontDmMono capitalize text-center font-medium text-xl md:text-2xl lg:text-3xl"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Desenvolvedor front-end
        </h3>
        <p 
          className="indent-2 max-w-[700px] mt-5 p-2 text-justify md:text-lg"
          data-aos="fade-right" data-aos-delay="700" data-aos-duration="1200"
        >
          Eu gosto de criar interfaces <strong>funcionais</strong> e voltadas para o usuário, sempre buscando melhorar a <strong>experiência</strong> e tornar tudo mais intuitivo. Em cada projeto, vejo uma chance de aprender algo novo e evoluir minhas <strong>habilidades</strong>. Meu objetivo é entregar soluções que façam sentido para quem vai usá-las, de forma <strong>prática</strong> e <strong>eficiente</strong>, sem complicar.
        </p>
      </article>
    </section>
  );
}
