import skill_data from "../../data/skills.json";

export const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col gap-10 ">
        <div className="bg-brick px-4 py-2 w-fit mx-2 mb-4 outline-dashed outline-2 outline-offset-[4px] outline-white">
          <h1 className="text-2xl lg:text-3xl font-bold text-white transition-all duration-500">
            SKILLS
          </h1>
        </div>
        <div
          id="hardskill"
          className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 "
        >
          {skill_data.hardskills.map((skill) => (
            <div key={skill.id}>
              <div className="bg-blueMunsell text-white transition-all duration-500">
                <h1 className="text-xl font-bold">{skill.title}</h1>
                <p className="text-l">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="w-1/2 border border-white my-3" />
        <div
          id="softskill"
          className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10"
        >
          {skill_data.softskills.map((skill) => (
            <div key={skill.id}>
              <div className="bg-blueMunsell text-white btransition-all duration-500">
                <h1 className="text-xl font-bold">{skill.title}</h1>
                <p className="text-l">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
