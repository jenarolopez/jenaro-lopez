
// import Projects from "../components/Projects";

import About from "../component/About";
import Projects from "../component/Projects";
import Workexperience from "../component/WorkExperience";

// import WorkexperienceCard from "../components/Workexperience";
const RightColumn = () => {
  return (
    <div className="pt-24 lg:w-[52%] lg:py-24" id="right-column">
      <About />
      <Workexperience />
      {/* <About />
      <WorkexperienceCard />
     
      <Projects /> */}
      <Projects />
      <section aria-label="Projects" id="contact">
        <h2 className="text-2xl font-bold mb-4 font-lato">Get In Touch</h2>
        <p>
          I'm always open to new opportunities and collaborations. Feel free to
          reach out to me at{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-[#1B998B] hover:underline"
          >
            jenarosalvadorlopez@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default RightColumn;
