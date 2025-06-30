"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import SkillsExperience from "@/components/SkillsExperience";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <SkillsExperience />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
