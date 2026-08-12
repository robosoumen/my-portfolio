const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-base-100 px-6 py-24 md:py-32"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container relative mx-auto grid items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div className="animate-fade-up text-center lg:text-left">

          {/* Availability */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Available for opportunities
          </div>

          <p className="text-lg font-medium text-base-content/60">
            Hello, I'm
          </p>

          <h1 className="mt-2 text-5xl font-black tracking-tight md:text-7xl">
            Soumen Bera<span className="text-primary">.</span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold md:text-4xl">
            MERN Stack Developer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-base-content/65 lg:mx-0 lg:text-lg">
            I build modern, responsive and full-stack web applications
            using MongoDB, Express.js, React.js and Node.js.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="btn btn-primary btn-lg"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="btn btn-outline btn-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-7 flex justify-center gap-3 lg:justify-start">

            <a
              href="https://github.com/robosoumen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline font-bold"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/in/soumenbera211"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-circle btn-outline font-bold"
              aria-label="LinkedIn"
            >
              in
            </a>

          </div>
        </div>

        {/* Right Developer Card */}
        <div className="animate-fade-up animate-delay-200 flex justify-center">

          <div className="relative w-full max-w-md">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-base-300 bg-base-200 p-5 shadow-2xl">

              {/* Window Header */}
              <div className="mb-5 flex items-center gap-2 border-b border-base-300 pb-4">

                <span className="h-3 w-3 rounded-full bg-error" />
                <span className="h-3 w-3 rounded-full bg-warning" />
                <span className="h-3 w-3 rounded-full bg-success" />

                <span className="ml-3 text-sm text-base-content/50">
                  soumen.js
                </span>

              </div>

              {/* Code */}
              <div className="font-mono text-sm leading-8 md:text-base">

                <p>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-secondary">
                    developer
                  </span>{" "}
                  = {"{"}
                </p>

                <p className="pl-5">
                  name:{" "}
                  <span className="text-success">
                    "Soumen Bera"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  role:{" "}
                  <span className="text-success">
                    "MERN Developer"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  passion:{" "}
                  <span className="text-success">
                    "Building Web Apps"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  status:{" "}
                  <span className="text-success">
                    "Open to Work"
                  </span>
                </p>

                <p>
                  {"}"}
                </p>

              </div>

              {/* Tech Stack */}
              <div className="mt-6 grid grid-cols-3 gap-3">

                {/* React */}
                <div className="rounded-2xl border border-base-300 bg-base-100 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-primary">
                  <div className="text-2xl font-black text-primary">
                    R
                  </div>

                  <p className="mt-2 text-xs font-semibold">
                    React
                  </p>
                </div>

                {/* Node */}
                <div className="rounded-2xl border border-base-300 bg-base-100 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-primary">
                  <div className="text-2xl font-black text-primary">
                    N
                  </div>

                  <p className="mt-2 text-xs font-semibold">
                    Node.js
                  </p>
                </div>

                {/* MongoDB */}
                <div className="rounded-2xl border border-base-300 bg-base-100 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-primary">
                  <div className="text-2xl font-black text-primary">
                    M
                  </div>

                  <p className="mt-2 text-xs font-semibold">
                    MongoDB
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-2xl md:block"
        aria-label="Scroll to about"
      >
        ↓
      </a>

    </section>
  );
};

export default Hero;