import { useDarkMode } from "./useDarkMode";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();

  const isSmallScreen = `hidden md:inline`;

  return (
    <>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full dark:bg-gray-200 bg-gray-700 text-white dark:text-black transition-colors"
        aria-label="Toggle dark mode"
      >
        {theme === "light" ? (
          <>
            🌙 <span className={isSmallScreen}>Dark</span>
          </>
        ) : (
          <>
            ☀️ <span className={isSmallScreen}>Light</span>
          </>
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
