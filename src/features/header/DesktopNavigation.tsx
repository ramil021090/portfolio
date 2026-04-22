import type { NavItem } from "./types";
interface DesktopNavigation {
  data: NavItem[];
}

const DesktopNavigation = ({ data }: DesktopNavigation) => {
  return (
    <>
      <div className="hidden md:flex items-center gap-8  dark:bg-gray-900 text-gray-800 ">
        {data.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative group font-medium text-gray-700 dark:text-white hover:text-indigo-600 transition-colors duration-200 "
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 dark:text-white bg-indigo-600 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent  rounded-lg">
          <a href="#contact">
            <button className="btn-primary text-md  dark:border border-sky-500 py-2 px-4 rounded-xl ">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default DesktopNavigation;
