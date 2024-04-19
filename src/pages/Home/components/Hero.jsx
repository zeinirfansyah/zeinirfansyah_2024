import { TypeAnimation } from "react-type-animation";
import foto1 from "../../../assets/images/zein.jpg";
import github_icon from "../../../assets/icons/github_outline_icon.svg";
import linkedin_icon from "../../../assets/icons/linkedin_outline_icon.svg";
import instagram_icon from "../../../assets/icons/instagram_outline_icon.svg";


export const Hero = () => {
  return (
    <div data-aos="zoom-in-up" className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div
          className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start lg:w-1/2"  
        >
          <h1 className="text-2xl lg:text-5xl font-bold transition-all duration-500 text-center lg:text-start bg-none lg:bg-blueMunsell lg:text-white lg:p-2 lg:outline-dashed outline-2 outline-blueMunsell outline-offset-4">
            GREETINGS!
          </h1>
          <TypeAnimation
            cursor={true}
            sequence={["I AM ZEIN IRFANSYAH."]}
            speed={10}
            wrapper="h1"
            className="font-semibold text-2xl lg:text-5xl transition-all duration-500 text-center lg:text-start"
          />
            <hr className="w-1/2 border-2 my-2 border-blueMunsell transition-all duration-500" />
          <h1 className="text-xl lg:text-3xl transition-all duration-500 text-center lg:text-start font-sans">SOFTWARE ENGINEER</h1>
          <a href="mailto:mail@zeinirfansyah.me" className="flex justify-center items-center bg-blueMunsell border-2 border-blueMunsell text-white hover:rounded-xl hover:bg-antiFlashWhite hover:text-blueMunsell outline-2 outline-blueMunsell outline-dashed  outline-offset-4 transition-all duration-500 w-full lg:w-1/4 py-1 mt-2 ">
            Let&apos;s Talk
          </a>
          <div
              className="flex flex-row justify-center items-center gap-3"
            >
              <a
                href="https://github.com/zeinirfansyah"
                className="p-2 drop-shadow-md rounded hover:rounded-none w-14 hover:translate-y-1 transition-all duration-500"
                target="_blank"
              >
                <img src={github_icon} alt="github" />
              </a>
              <a
                href="https://linkedin.com/in/zein-irfansyah"
                className="p-2 drop-shadow-md rounded hover:rounded-none w-14 hover:translate-y-1 transition-all duration-500"
                target="_blank"
              >
                <img
                  src={linkedin_icon}
                  alt="github"
                />
              </a>
              <a
                href="https://instagram.com/zeinirfansyah"
                className="p-2 drop-shadow-md rounded hover:rounded-none w-14 hover:translate-y-1  transition-all duration-500"
                target="_blank"
              >
                <img
                  src={instagram_icon}
                  alt="github"
                />
              </a>
            </div>
        </div>
        <div
          className="lg:w-1/2 flex justify-center items-center order-first lg:order-last py-7 lg:py-12"
        >
          <div className="flex flex-col gap-5 w-[75%] outline-dashed outline-2 outline-offset-8 lg:-outline-offset-8 outline-blueMunsell bg-white lg:rotate-3 p-4 lg:p-8 transition-all duration-500 shadow-xl lg:animate-float lg:hover:animate-none lg:hover:rotate-0">
            <img src={foto1} alt="Zein Irfansyah 2023" />
            <div className="desc hidden lg:flex">
              <p>
                Hai, I&apos;m <strong>Zein Irfansyah</strong>, fresh graduate of
                Informatics Department, University of Technology Yogyakarta with
                a <strong>GPA of 3.78</strong> and
                <strong>1 year of experience</strong> in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
