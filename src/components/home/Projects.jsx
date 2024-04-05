import project_data from "../../data/projects.json";

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <div
          id="projects"
          className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start"
        >
          <div id="projects-list" className="flex flex-col">
            <div className="bg-brick px-4 py-2 mt-7 w-fit mx-2 mb-4 outline-dashed outline-2 outline-offset-[4px] outline-blueAirForce">
              <h1 className="text-2xl lg:text-3xl font-bold text-white transition-all duration-500">
                PROJECTS
              </h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {project_data.projects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  className="flex flex-col gap-2 p-4 m-6 bg-white border-[#d7dfde] border-2 outline-dashed outline-2 outline-offset-4 outline-blueMunsell hover:rounded-xl hover:-rotate-3 transition-all duration-500"
                >
                  <h1 className="text-xl">{project.title}</h1>
                  <p className="text-sm">{project.description}</p>
                  <p className="text-sm">{project["tech-stack"]}</p>
                </a>
              ))}

              <a
                href="https://github.com/zeinirfansyah"
                target="_blank"
                className="flex flex-col items-center justify-center gap-2 p-4 m-6 border-[#d7dfde] border-2 outline-dashed outline-2 outline-offset-4 outline-blueMunsell bg-white hover:rounded-xl hover:-rotate-3 transition-all duration-500"
              >
                More Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
