import Title from "../../ui/Title";
import { icons } from "./icons";
const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-100 text-green-700";
    case "Proficient":
      return "bg-blue-100 text-blue-700";
    case "Familiar":
      return "bg-gray-100 text-gray-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const SkillIcons = () => {
  return (
    <>
      <Title text="Currrent Tech Stack & Skills" />
      <div className=" mt-10 rounded-2xl bg-white p-5 shadow-md transition-all duration-200 hover:shadow-lg dark:bg-gray-800/50">
        <div className="px-4 py-12 sm:px-6 md:py-16 lg:py-20">
          <div className="grid w-full grid-cols-2 gap-4 px-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-7 xl:gap-10">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="group flex flex-col items-center transition-all duration-200 hover:scale-105"
              >
                <div className="rounded-xl bg-linear-to-br from-gray-50 to-gray-100 p-4 text-gray-700 shadow-sm transition-all duration-200 group-hover:from-indigo-50 group-hover:to-purple-50 group-hover:shadow-md group-hover:text-indigo-600">
                  {icon.icon}
                </div>
                <h1 className="mt-3 text-center text-sm font-medium text-gray-600 dark:text-white transition-colors duration-200 group-hover:text-indigo-600">
                  {icon.iconName}
                </h1>
                <span
                  className={`mt-1 rounded-full px-2 py-0.5 text-xs font-semibold ${getLevelColor(icon.level)}`}
                >
                  {icon.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillIcons;
