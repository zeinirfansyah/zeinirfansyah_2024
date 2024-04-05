import { About } from "../components/home/About";
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
      </div>
    </>
  );
}
