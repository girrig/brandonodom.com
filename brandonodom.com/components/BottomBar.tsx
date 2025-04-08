const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 px-12 py-6">
      <div className="flex justify-center gap-4">
        <p className="text-sm text-gray-500">
          &copy; {currentYear} Brandon Odom
        </p>
        <a
          href="https://github.com/girrig/brandonodom.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.shields.io/github/last-commit/girrig/brandonodom.com" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
