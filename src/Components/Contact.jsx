const Contact = () => {
  return (
    <section id="contact" className="bg-base-100 px-6 py-24 md:py-32">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-primary">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mt-5 leading-7 text-base-content/60">
            I'm currently open to opportunities and would be happy to discuss a
            project, job opportunity or collaboration.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-3xl border border-base-300 bg-base-200 p-7 shadow-xl md:p-10">
            <h3 className="text-2xl font-black">Get In Touch</h3>

            <p className="mt-4 leading-7 text-base-content/60">
              Feel free to reach out if you have a job opportunity, project idea
              or simply want to connect.
            </p>

            <div className="mt-8 space-y-5">
              {/* Email */}
              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 transition hover:border-primary"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  ✉
                </div>

                <div>
                  <p className="text-sm text-base-content/50">Email</p>

                  <p className="font-semibold">soumenbera211@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/soumenbera211"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 transition hover:border-primary"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold">
                  in
                </div>

                <div>
                  <p className="text-sm text-base-content/50">LinkedIn</p>

                  <p className="font-semibold">Connect with me</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/robosoumen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 transition hover:border-primary"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  Git
                </div>

                <div>
                  <p className="text-sm text-base-content/50">GitHub</p>

                  <p className="font-semibold">View my projects</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center rounded-3xl bg-primary p-7 text-primary-content shadow-xl md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">
              Open to Opportunities
            </p>

            <h3 className="mt-4 text-3xl font-black md:text-4xl">
              Looking for a MERN Stack Developer?
            </h3>

            <p className="mt-5 leading-7 opacity-90">
              I'm interested in full-stack development opportunities where I can
              contribute, learn and grow as a developer.
            </p>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="btn mt-8 w-fit border-none bg-base-100 px-6 text-base-content hover:bg-base-200"
            >
              Download Resume
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=soumenbera211@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-3 w-fit border-primary-content text-primary-content hover:bg-primary-content hover:text-primary"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
