import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 px-6 scroll-mt-28" id="about">
      <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10">
        <h2 className="text-4xl font-bold text-center mb-12">
          About
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"> Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-60 h-70 relative overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="profile image"
              width={300}
              height={300}
              className="object-cover rounded-full border-4 border-pink-500"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">Pralhad Pravin Lad</h1>
            <h2 className="text-xl mt-2 text-purple-400">Frontend Developer | Full Stack Developer</h2>

            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              {[
                "HTML5", "CSS3", "JavaScript", "ReactJs", "TypeScript", "NodeJs", "ExpressJs",
                "Tailwind CSS", "NextJs", "SQL", "MongoDB", "Git", "GitHub", "Jenkins", "Docker", "GitLab",
              ].map((skill) => (
                <span key={skill} className="bg-purple-600 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-6 text-gray-300">
              Frontend Developer with 2+ years of experience building responsive and scalable web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Proficient in modern UI development, state management with Redux Toolkit, and build tools like Vite and Webpack. Hands-on experience with CI/CD tools including GitHub, Jenkins (basic), Docker, and GitLab, contributing to DevOps-aware frontend development.Skilled in integrating APIs and working with backend technologies like Node.js, Express.js, and MongoDB for full-stack project development. Strong understanding of SQL and database design. Experienced in converting Figma and Framer designs into pixel-perfect, production-ready UIs. Developed multiple real-world projects such as a Portfolio Website, Netflix Clone, and Grocery App, with clean code and modern best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
