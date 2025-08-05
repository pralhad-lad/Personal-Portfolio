"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import SkillsExperience from "@/components/SkillsExperience";
import UiuxWorkSection from "@/components/UiuxWorkSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <About />
      <SkillsExperience />
      <Projects />
      <UiuxWorkSection/>
      <Resume />
      <Contact />
    </main>
  );
}
