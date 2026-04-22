const FooterDate = () => {
  return (
    <div className="flex justify-end">
      <footer className="  py-12 " id="contact">
        <div className="container-custom mt-6">
          <div className="text-center">
            <p className="text-slate-400 dark:text-slate-700">
              © {new Date().getFullYear()} Ram.Dev — Built with React & Tailwind
              CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterDate;
