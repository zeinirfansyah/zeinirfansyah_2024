import experience_data from "../../data/experiences.json";

export const Experiences = () => {
  return (
    <div data-aos="zoom-in-up" className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <div className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start lg:w-1/2">
          <div className="flex flex-col">
            <div className="bg-brick px-4 py-2 mt-7 w-fit mx-2 mb-4 outline-dashed outline-2 outline-offset-[4px] outline-white">
              <h1 className="text-xl lg:text-2xl font-bold text-white transition-all duration-500">
                EXPERIENCES
              </h1>
            </div>
            {experience_data.experiences.map((experience) => (
              <div key={experience.id}>
                <div className="bg-blueMunsell text-white px-4 mx-2 my-3 border-l-4 border-brick transition-all duration-500">
                  <h1 className="text-xl font-semibold">{experience.title}</h1>
                  <h2 className="text-l mb-2">
                    {experience.company} - {experience.period}
                  </h2>
                  <p className="text-l">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start lg:w-1/2">
          <div className="flex flex-col">
            <div className="bg-brick px-4 py-2 mt-7 w-fit mx-2 mb-4 outline-dashed outline-2 outline-offset-[4px] outline-white">
              <h1 className="text-xl lg:text-2xl font-bold text-white transition-all duration-500">
                EDUCATIONS
              </h1>
            </div>
            {experience_data.educations.map((education) => (
              <div key={education.id}>
                <div className="bg-blueMunsell text-white px-4 mx-2 my-3 border-l-4 border-brick transition-all duration-500">
                  <h1 className="text-xl font-semibold">{education.title}</h1>
                  <h2 className="text-l mb-2">
                    {education.departement} - {education.period}
                  </h2>
                  <p className="text-l">{education.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
