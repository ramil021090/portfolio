const Connect = () => {
  return (
    <>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="flex flex-col gap-4 sm:flex-row sm:gap-2"
      >
        <input
          type="email"
          name="email"
          placeholder="Type Email Address"
          required
          className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
        />
        <button
          type="submit"
          className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          CONNECT
        </button>
      </form>
    </>
  );
};

export default Connect;
