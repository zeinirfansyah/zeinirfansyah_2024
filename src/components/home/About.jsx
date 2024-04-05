import foto2 from "../../assets/images/zein_sidang.jpg";

export const About = () => {
  return (
    <div  data-aos="zoom-in-up" className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex justify-center items-center w-full lg:w-1/3">
          <div
            className="w-1/2 lg:w-3/4 p-6 shadow-xl outline-dashed outline-2 outline-blueMunsell -outline-offset-8 lg:-rotate-3 lg:hover:rotate-0 transition-all duration-500"
          >
            <img src={foto2} alt="zein 2023" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full lg:w-2/3">
          <h1 className="text-xl lg:text-2xl font-semibold text-blueAirForce">
            BACKGROUND
          </h1>
          <hr className="border border-blueAirForce" />
          <p className="text-l lg:text-xl font-light">
            Fresh graduate of Informatics Departement from the Universitas
            Teknologi Yogyakarta with a GPA of 3.78 and 1 year of experience in
            web development.
          </p>
          <p className="text-l lg:text-xl font-light">
            Possesses a high level of enthusiasm and skills in software
            engineering and digital technology honed through various software
            development projects. Specializes in web development using Laravel
            and React JS. Has good discipline, high loyalty, and integrity.
            Highly motivated to work anywhere and capable of working under
            pressure.
          </p>
        </div>
      </div>
    </div>
  );
};
