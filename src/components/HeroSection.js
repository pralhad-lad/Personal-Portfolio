import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-28 text-center px-4 scroll-mt-28" >
      <Image
        src="/images/profile.jpg"
        alt="profile"
        width={160}
        height={160}
        className="rounded-full mb-6 border-4 border-purple-500"
      />

      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        I am
        <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {" "}Pralhad Lad
        </span>, Frontend Developer based in India
      </h1>

      <p className="text-gray-300 max-w-xl text-sm md:text-base mb-8">
        I am a passionate frontend developer specializing in React, Next.js, and Tailwind CSS, aiming to create beautiful and performant user experiences.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#contact"
          className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-sm hover:opacity-90 transition"
        >
          Connect With Me
        </a>
        <a
          href="/PRALHAD_PRAVIN_LAD_N.pdf"
          download
          className="border border-purple-500 px-6 py-2 rounded-full text-sm hover:bg-purple-500 hover:text-white transition"
        >
          My Resume
        </a>
      </div>
    </section>
  );
}
