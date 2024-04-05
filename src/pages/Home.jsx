import { About } from "../components/home/About";
import { Experiences } from "../components/home/Experiences";
import { Hero } from "../components/home/Hero";

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
      </div>
    </>
  );
}
