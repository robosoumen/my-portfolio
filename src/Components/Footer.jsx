const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Soumen Bera
            </h2>
            <p className="mt-3 text-base-content/70">
              MERN Stack Developer passionate about building modern,
              responsive and user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <a href="#home" className="hover:text-primary transition">
                Home
              </a>

              <a href="#about" className="hover:text-primary transition">
                About
              </a>

              <a href="#skills" className="hover:text-primary transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-primary transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-primary transition">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Connect With Me
            </h3>

            <div className="flex gap-4">
              <a
                href="mailto:soumenbera211@gmail.com"
                className="hover:text-primary transition"
              >
                Email
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-base-content/20 mt-8 pt-5 text-center">
          <p className="text-sm text-base-content/60">
            © {new Date().getFullYear()} Soumen Bera. All rights reserved.
          </p>

          <p className="text-xs text-base-content/50 mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;