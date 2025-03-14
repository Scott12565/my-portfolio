import About from "@/sections/About";
import Contacts from "@/sections/Contacts";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main className="pt-16 ">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  )
}
