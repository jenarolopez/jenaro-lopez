import React from "react";
;
export default function About() {
  return (
    <section
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About"
      id="about"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="font-lato">
        <p className="mb-4">
          Hi, I'm a passionate Full Stack Developer with 4 years of experience
          building dynamic, scalable, and efficient web and mobile applications. My
          expertise spans both frontend and backend development, ensuring seamless
          integration and exceptional user experiences.
        </p>

        <p className="mb-4">
          I specialize in modern technologies like React Native, React, and NestJS,
          creating intuitive interfaces and robust server-side systems.
          Additionally, I've worked extensively with PHP for microservices,
          enabling efficient communication and interoperability across systems.
        </p>

        <p className="mb-4">
          Beyond technical skills, I'm committed to writing clean, maintainable
          code and delivering high-quality solutions that align with user needs and
          business objectives. Whether tackling complex problems or implementing
          innovative features, I bring a collaborative and solution-focused mindset
          to every project.
        </p>

        <p className="mb-4">
          When I'm not coding, I enjoy unwinding by playing video games, with a
          <span className="cursor-[url('/image/dota2-cursor.png'),_pointer]"> particular passion for Dota 2</span>. Gaming not only provides relaxation but
          also sharpens my strategic thinking and teamwork skills, which I bring
          into my professional work.
        </p>
      </div>
    </section>
  );
}
