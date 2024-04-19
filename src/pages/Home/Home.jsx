import { About } from "./components/About"
import { Certificates } from "./components/Certificates";
import { Experiences } from "./components/Experiences";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";



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
        <div id="projects" className=" bg-gradient-to-b from-antiFlashWhite to-white">
          <Projects />
        </div>
      </div>
    </>
  );
}
