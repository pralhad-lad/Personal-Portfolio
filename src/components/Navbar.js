import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-black/60 backdrop-blur-md text-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/images/logo_img.png" alt="logo" width={40} height={40} className="rounded-full" />
          <h1 className="text-2xl font-bold text-white">
            Pral<span className="text-pink-500">had</span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><Link href="#home" className="hover:text-pink-400">Home</Link></li>
          <li><Link href="#about" className="hover:text-pink-400">About Me</Link></li>
          <li><Link href="#skills" className="hover:text-pink-400">Skills & Experience</Link></li>
          <li><Link href="#projects" className="hover:text-pink-400">Projects</Link></li>
          <li><Link href="#resume" className="hover:text-pink-400">Resume</Link></li>
          <li><Link href="#contact" className="hover:text-pink-400">Contact</Link></li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90"
        >
          Contact With Me
        </a>
      </div>
    </nav>
  );
}
