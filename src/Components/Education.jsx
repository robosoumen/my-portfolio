const Education = () => {
  return (
    <section
      id="education"
      className="bg-base-200 px-6 py-24 md:py-32"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Academic Background
          </h2>
        </div>

        {/* Education Card */}
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-base-300 bg-base-100 p-7 shadow-xl md:p-10">

            <div className="flex flex-col gap-6 md:flex-row md:items-start">

              {/* Year */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 font-black text-primary">
                B.Tech
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Bachelor's Degree
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Bachelor of Technology
                </h3>

                <p className="mt-2 text-lg font-semibold text-base-content/70">
                  Mechanical Engineering
                </p>

                <p className="mt-4 leading-7 text-base-content/60">
                  Academic background in Mechanical Engineering,
                  followed by a focused transition into modern
                  full-stack web development.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;