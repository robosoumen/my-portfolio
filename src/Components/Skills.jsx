const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "React Router",
        "Tailwind CSS",
        "DaisyUI",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "REST API",
        "Axios",
      ],
    },
    {
      title: "Database",
      skills: [
        "MongoDB",
        "MongoDB Atlas",
      ],
    },
    {
      title: "Authentication",
      skills: [
        "Firebase Authentication",
        "JWT",
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Netlify",
        "Vercel",
        "Firebase",
      ],
    },
    {
      title: "Other",
      skills: [
        "Responsive Design",
        "API Integration",
        "CRUD Operations",
        "Protected Routes",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-base-100 px-6 py-24 md:py-32"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            My Skills
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-5 leading-7 text-base-content/60">
            Technologies and tools I use to build modern,
            responsive and full-stack web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-3xl border border-base-300 bg-base-200 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
            >
              {/* Category */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-lg font-black text-primary">
                  {group.title.charAt(0)}
                </div>

                <h3 className="text-xl font-bold">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-base-300 bg-base-100 px-3 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-base leading-7 text-base-content/70">
            Currently focused on improving my{" "}
            <span className="font-bold text-primary">
              MERN Stack
            </span>{" "}
            development skills and building real-world projects.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;