import zapImg from '../assets/projects/zapshift.png'
import foodImg from '../assets/projects/food-lover.png'
import toyImg from '../assets/projects/toy-universe.png'


const Projects = () => {
  const projects = [
  {
    title: "ZapShift",
    category: "Full Stack MERN Application",
    description:
      "A full-stack parcel delivery and management platform with user authentication, parcel management, payment integration and role-based functionality.",
    image: zapImg,
    live: "https://recap-zap-shift.web.app/",
    client:
      "https://github.com/robosoumen/recap-zap-shift-client",
    server:
      "https://github.com/robosoumen/recap-two-zap-shift-server",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
    ],
  },

  {
    title: "Local Food Lover Network",
    category: "Full Stack MERN Application",
    description:
      "A food-focused social platform where users can explore, share and interact with food-related content through a modern responsive interface.",
    image: foodImg,
    live: "https://assignment-ten-ec1b2.web.app/",
    client:
      "https://github.com/robosoumen/Assignment-client-10",
    server:
      "https://github.com/robosoumen/Assignment-server-10",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
  },

  {
    title: "Toy Universe",
    category: "Frontend Web Application",
    description:
      "A responsive toy marketplace interface where users can explore different toys and browse product information through a clean and user-friendly design.",
    image: toyImg,
    live: "https://toy-universe-37ba3.web.app/",
    client:
      "https://github.com/robosoumen/toy-universe",
    server: null,
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
    ],
  },
];

  return (
    <section
      id="projects"
      className="bg-base-200 px-6 py-24 md:py-32"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            My Projects
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Featured Work
          </h2>

          <p className="mt-5 leading-7 text-base-content/60">
            A selection of projects I have built while developing
            my full-stack web development skills.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-primary"
            >

              {/* Screenshot */}
              <div className="relative overflow-hidden bg-base-300">
                <img
                  src={project.image}
                  alt={`${project.title}`}
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-base-100/90 px-3 py-2 text-xs font-bold shadow-lg backdrop-blur">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">

                <h3 className="text-2xl font-black">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-base-content/65">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-7 flex flex-wrap gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub
                  </a>

                  {project.server && (
                    <a
                      href={project.server}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      Server ↗
                    </a>
                  )}

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;