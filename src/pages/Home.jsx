import { About } from "../components/home/About";
import { Certificates } from "../components/home/Certificates";
import { Experiences } from "../components/home/Experiences";
import { Hero } from "../components/home/Hero";
import { Skills } from "../components/home/Skills";

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="Hero bg-antiFlashWhite">
          <Hero />
        </div>
        <div className="About bg-white">
          <About />
        </div>
        <div className="About bg-blueMunsell">
          <Experiences />
        </div>
        <div className="About bg-white">
          <Certificates />
        </div>
        <div className="About bg-blueMunsell">
          <Skills />
        </div>
      </div>
    </>
  );
}
