import About from "./features/about/About";
import ThemeToggle from "./features/darkmode/ThemeToggle";
import { useDarkMode } from "./features/darkmode/useDarkMode";
import FooterSection from "./features/footer/FooterSection";
import HomeSection from "./features/home/HomeSection";
import ProjectSection from "./features/project/ProjectSection";
import SkillsSection from "./features/skills/SkillsSection";
import Header from "./sections/Header";
import Container from "./ui/Container";

const App = () => {
  useDarkMode();
  return (
    <div className="bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Container>
        <Header />
        <HomeSection />
        <About />
        <SkillsSection />
        <ProjectSection />
        <FooterSection />
        <div className="fixed bottom-6 right-6 z-50">
          <ThemeToggle />
        </div>
      </Container>
    </div>
  );
};

export default App;
