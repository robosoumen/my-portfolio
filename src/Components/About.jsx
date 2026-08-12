const About = () => {
  return (
    <section
      id="about"
      className="bg-base-200 px-6 py-24 md:py-32"
    >
      <div className="container mx-auto">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Who I Am
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>
            <div className="rounded-3xl border border-base-300 bg-base-100 p-7 shadow-xl md:p-10">

              <p className="text-lg leading-8 text-base-content/70">
                I'm a{" "}
                <span className="font-bold text-primary">
                  MERN Stack Developer
                </span>{" "}
                passionate about building modern, responsive and
                user-friendly web applications.
              </p>

              <p className="mt-5 leading-8 text-base-content/65">
                I work with React.js on the frontend and Node.js,
                Express.js and MongoDB on the backend. I enjoy
                building complete applications, integrating REST APIs,
                implementing authentication and creating responsive
                user interfaces.
              </p>

              <p className="mt-5 leading-8 text-base-content/65">
                Through my projects, I have worked with technologies
                such as Firebase Authentication, JWT, Stripe,
                MongoDB and modern deployment platforms.
              </p>

              <p className="mt-5 leading-8 text-base-content/65">
                I am continuously improving my development skills by
                building real-world projects and learning new
                technologies.
              </p>

            </div>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Card 1 */}
            <div className="group rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-primary">
              <div className="text-4xl font-black text-primary">
                MERN
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Full Stack Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Building complete web applications from frontend
                interfaces to backend APIs and databases.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-primary">
              <div className="text-4xl font-black text-primary">
                API
              </div>

              <h3 className="mt-4 text-xl font-bold">
                REST API
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Creating and integrating RESTful APIs using Node.js
                and Express.js.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-primary">
              <div className="text-4xl font-black text-primary">
                AUTH
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Authentication
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Working with Firebase Authentication, protected
                routes and JWT-based authorization.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-primary">
              <div className="text-4xl font-black text-primary">
                UI
              </div>

              <h3 className="mt-4 text-xl font-bold">
                Responsive Design
              </h3>

              <p className="mt-3 text-sm leading-6 text-base-content/60">
                Creating responsive interfaces that work smoothly
                across desktop, tablet and mobile devices.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;