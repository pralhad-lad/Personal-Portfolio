import Image from "next/image";

export default function SkillsExperience() {
  return (
    <section className="text-white py-12 px-6 scroll-mt-28" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12">
        Skills &{" "}
        <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
          Experience
        </span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Frontend Development */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow">
          <h3 className="text-xl font-bold text-purple-300 mb-4">Frontend Development</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[
              { name: "HTML5", img: "html.png" },
              { name: "CSS3", img: "css.webp" },
              { name: "JavaScript", img: "js.jpeg" },
              { name: "TypeScript", img: "ts.png" },
              { name: "ReactJS", img: "react.png" },
              { name: "NextJS", img: "nextjs.png" },
              { name: "Tailwind CSS", img: "tailwind.png" },
              { name: "Bootstrap", img: "bootstrap.jpeg" },
              { name: "Redux Toolkit", img: "redux.png" },
              { name: "JSON", img: "json.png" },
              { name: "AJAX", img: "ajax.png" },
            ].map(({ name, img }) => (
              <div key={name} className="flex flex-col items-center">
                <Image src={`/images/${img}`} alt={name} width={40} height={40} />
                <span className="text-sm mt-2 text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend & Database */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow">
          <h3 className="text-xl font-bold text-purple-300 mb-4">Backend & Database</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[
              { name: "NodeJS", img: "node.png" },
              { name: "ExpressJS", img: "express.png" },
              { name: "MongoDB", img: "mongo.jpeg" },
              { name: "SQL", img: "sql.png" },
            ].map(({ name, img }) => (
              <div key={name} className="flex flex-col items-center">
                <Image src={`/images/${img}`} alt={name} width={40} height={40} />
                <span className="text-sm mt-2">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps Tools */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow">
          <h3 className="text-xl font-bold text-purple-300 mb-4">DevOps Tools</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[
              { name: "Git", img: "git.png" },
              { name: "GitHub", img: "github.png" },
              { name: "GitLab", img: "gitlab.png" },
              { name: "Docker", img: "docker.png" },
              { name: "Jenkins", img: "jenkins.jpeg" },
              { name: "Vite", img: "vite.jpeg" },
              { name: "Webpack", img: "webpack.png" },
            ].map(({ name, img }) => (
              <div key={name} className="flex flex-col items-center">
                <Image src={`/images/${img}`} alt={name} width={40} height={40} />
                <span className="text-sm mt-2">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testing & Others */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow">
          <h3 className="text-xl font-bold text-purple-300 mb-4">Testing & Other Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {[
              { name: "Jest", img: "jest.png" },
              { name: "Figma", img: "figma.jpeg" },
              { name: "Framer", img: "framer.jpeg" },
              { name: "AWS", img: "aws.jpeg" },
              { name: "Linux", img: "linux.jpeg" },
            ].map(({ name, img }) => (
              <div key={name} className="flex flex-col items-center">
                <Image src={`/images/${img}`} alt={name} width={40} height={40} />
                <span className="text-sm mt-2">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow col-span-2">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-[100px]">
              <Image
                src="/images/wipro.jpeg"
                alt="Wipro"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold">Wipro</h3>
              <p className="text-sm text-purple-300 font-medium bg-white/10 inline-block px-3 py-1 rounded-full mt-2 mb-4">
                Dec 2021 – Jul 2024
              </p>
              <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
                <li>Contributed to Oracle Applications using TOAD and SQL for enterprise data handling.</li>
                <li>Designed UI prototypes in Figma and implemented responsive components using React, Tailwind CSS, and TypeScript.</li>
                <li>Improved UI responsiveness by 30% by optimizing layouts and interactions using modern CSS (Flexbox, Grid).</li>
                <li>Developed scalable frontend architecture with Redux Toolkit for better state management.</li>
                <li>Implemented DevOps workflows with Git, GitHub, GitLab, Jenkins (basic), and Docker to support CI/CD pipelines.</li>
                <li>Acquired backend knowledge in Node.js, Express.js, and MongoDB to support full-stack integration.</li>
                <li>Proactively learned frontend development outside of core Oracle stream, aligning with modern web standards.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
