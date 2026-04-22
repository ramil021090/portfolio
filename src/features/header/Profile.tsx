import Links from "../home/Links";
const Profile = () => {
  return (
    <>
      <div className="h-screen  flex flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
          <a
            href="https://github.com/ramil021090"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition"
          >
            <span>in @Ram.dev</span>
          </a>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Turning Ideas into
          <span className="bg-linear-to-r px-1 from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Interactive Digital Realities
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
          Welcome to Ram.dev — where your ideas become interactive, scalable,
          and user-centered web experiences.
        </p>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/ramil-villahermosa-a78476339/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-500 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Hire Now
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
        <Links gap="1" withLabel="false" />
      </div>
    </>
  );
};

export default Profile;
