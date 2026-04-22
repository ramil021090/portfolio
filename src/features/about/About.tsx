import Section from "../../ui/Section";
import Title from "../../ui/Title";

const About = () => {
  return (
    <>
      <Section id="about">
        <Title text="About" />
        <div className=" max-w-8xl flex my-5 rounded-2xl bg-white p-6 px-12  shadow-md transition-all duration-200 hover:shadow-lg dark:bg-gray-800/50 ">
          <div className="flex flex-col items-center gap-8 lg:flex-row">
            <div className="h-48 w-48 overflow-hidden rounded-2xl shadow-md lg:h-56 lg:w-56">
              <img
                src="../images/profile.png"
                alt="Ram.dev"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="max-w-2xl">
              <p className="text-lg text-gray-700 dark:text-white font-serif text-justify  ">
                As a Frontend Developer specializing in React and TypeScript,
                focused on building modern, scalable, and user-centered web
                applications. I've established a strong foundation in creating
                reusable components, managing application state, and writing
                clean, type-safe code. I enjoy transforming ideas into
                interactive digital experiences while ensuring performance and
                usability. Constant learning and improvement drive me as I
                continue to grow as a developer.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;
