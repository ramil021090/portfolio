import Section from "../../ui/Section";
import Title from "../../ui/Title";

const PROJECTS = [
  {
    imageSource: "../images/project-exotic.png",
    alt: "pexopia",
    title: "Pexopia/exotics",
    description:
      "Pexopia is a hybrid platform that blends social networking and e-commerce, giving exotic pet lovers a place to connect, share, and trade in one ecosystem, while also prioritizing user comfort through light and dark mode accessibility.",
    tags: ["React ", "TypeScript ", "Tailwind CSS ", "Supabase "],
    githubUrl: "https://github.com/ramil021090/exotics.git",
    liveUrl:
      "https://exotics-lake.vercel.app/homepage/0aec83e0-8874-4383-84cc-7e3fff7af2cd",
    featured: true,
  },
  // {
  //   title: "Weather Dashboard",
  //   description:
  //     "Responsive weather application with 7-day forecast, location detection, and dark mode support.",
  //   tags: ["React", "API", "Chart.js", "Responsive"],
  //   githubUrl: "#",
  //   liveUrl: "#",
  // },
];

const ProjectSection = () => {
  const projectName = "Projects";
  const modifiedProjectName = projectName.slice(0, -1);

  console.log(modifiedProjectName);
  return (
    <>
      <Section id="projects" className=" scroll-mt-10">
        <Title
          text={
            PROJECTS.length <= 1
              ? `Featured ${modifiedProjectName} `
              : `Featured ${projectName} `
          }
        />

        <div className="">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-md transition-all duration-200 hover:shadow-lg dark:bg-gray-800/50 md:flex-row md:gap-6"
            >
              {/* Image */}
              <div className="w-full overflow-hidden rounded-xl shadow-md md:w-56 md:h-56">
                <img
                  src={project.imageSource}
                  alt={project.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Tags – assuming tags is an array, else split string */}
                <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
                  {Array.isArray(project.tags) ? (
                    project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                      {project.tags}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 transition hover:text-blue-800 dark:text-blue-400"
                  >
                    <span className="text-gray-700 dark:text-gray-300">
                      GitHub:
                    </span>{" "}
                    Repository
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-green-600 transition hover:text-green-800 dark:text-green-400"
                  >
                    <span className="text-gray-700 dark:text-gray-300">
                      Live:
                    </span>{" "}
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default ProjectSection;
