const Training = () => {
  return (
    <section
      id="training"
      className="bg-base-100 px-6 py-24 md:py-32"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            Training
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            My Learning Journey
          </h2>

          <p className="mt-5 leading-7 text-base-content/60">
            Continuous learning and hands-on practice have helped me
            build my skills as a full-stack developer.
          </p>
        </div>

        {/* Training Card */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-base-300 bg-base-200 p-7 shadow-xl md:p-10">

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Full Stack Web Development
                </p>

                <h3 className="mt-2 text-2xl font-black md:text-3xl">
                  MERN Stack Development
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-base-content/65">
                  Focused on developing practical skills in modern
                  frontend and backend technologies through hands-on
                  projects and real-world application development.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/10 px-5 py-3 text-center">
                <p className="text-sm font-bold text-primary">
                  Full Stack
                </p>
                <p className="text-xs text-base-content/60">
                  Development
                </p>
              </div>

            </div>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Next.js",
                "Firebase",
                "REST API",
                "Git",
                "GitHub",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Training;