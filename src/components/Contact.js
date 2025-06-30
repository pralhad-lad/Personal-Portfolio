import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 px-6 scroll-mt-28" id="contact">
      <div className="text-center mb-12">
        <p className="text-sm text-purple-400 mb-2">Let's Work Together</p>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
      </div>

      <div className="flex justify-center">
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-xl w-full border border-white/10">
          <h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">Contact Information</h3>

          <ul className="space-y-4 text-gray-200">
            <li className="flex justify-center items-center gap-2">
              <Mail size={20} className="text-purple-400" />
              <a href="mailto:pralhadlad29@gmail.com" className="hover:underline">pralhadlad29@gmail.com</a>
            </li>
            <li className="flex justify-center items-center gap-2">
              <Linkedin size={20} className="text-purple-400" />
              <a href="https://www.linkedin.com/in/pralhad-lad-b916b9198/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/pralhadlad</a>
            </li>
            <li className="flex justify-center items-center gap-2">
              <Github size={20} className="text-purple-400" />
              <a href="https://github.com/pralhad-lad" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/pralhadlad</a>
            </li>
          </ul>

          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <h3 className="text-lg font-medium text-white mb-2">Current Status</h3>
            <p className="text-green-400">✅ Available to Join Immediately</p>
          </div>
        </div>
      </div>
    </section>
  );
}
