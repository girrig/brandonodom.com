const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-12 py-6 flex flex-wrap justify-center items-center gap-4 border-t border-line">
        <p className="text-sm text-muted">&copy; {currentYear} Brandon Odom</p>
        <a
          href="https://github.com/girrig/brandonodom.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://img.shields.io/github/last-commit/girrig/brandonodom.com"
            alt="Last commit badge"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
