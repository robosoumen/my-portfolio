import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Training",
  "Education",
  "Contact",
];

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("portfolio-theme") || "dark"
  );

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/85 px-4 backdrop-blur-xl md:px-8">
      <div className="container mx-auto flex w-full items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tight md:text-2xl"
        >
          Soumen<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-medium transition-colors hover:text-primary"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* GitHub */}
          <a
            href="https://github.com/robosoumen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle hidden sm:flex"
            aria-label="GitHub"
          >
            <span className="text-sm font-black"><FaGithub  className="text-xl"/></span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/soumenbera211"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle hidden sm:flex"
            aria-label="LinkedIn"
          >
            <span className="text-sm font-black"><FaLinkedin  className="text-xl"/></span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle text-lg"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="btn btn-ghost btn-circle text-xl lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenu && (
        <div className="absolute left-0 top-full w-full border-b border-base-300 bg-base-100 p-4 shadow-xl lg:hidden">

          <ul className="menu w-full">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMobileMenu}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex gap-2 border-t border-base-300 pt-3 sm:hidden">

            <a
              href="https://github.com/robosoumen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex-1"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/soumenbera211"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex-1"
            >
              LinkedIn
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;