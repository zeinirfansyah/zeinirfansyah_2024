import { About } from "../components/home/About";
import { Certificates } from "../components/home/Certificates";
import { Experiences } from "../components/home/Experiences";
import { Hero } from "../components/home/Hero";
import { Projects } from "../components/home/Projects";
import { Skills } from "../components/home/Skills";

export default function Home() {
  return (
    <>
      <div className="Home">
        <div
          id="hero"
          className="bg-gradient-to-b from-antiFlashWhite to-white"
        >
          <Hero />
        </div>
        <div id="about" className=" bg-white">
          <About />
        </div>
        <div id="experiences" className=" bg-blueMunsell">
          <Experiences />
        </div>
        <div id="certificates" className=" bg-white">
          <Certificates />
        </div>
        <div id="skills" className=" bg-blueMunsell">
          <Skills />
        </div>
        <div id="projects" className=" bg-antiFlashWhite">
          <Projects />
        </div>
      </div>
    </>
  );
}
