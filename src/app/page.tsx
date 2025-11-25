import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingProfile from "@/components/FloatingProfile";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <Hero />
      <FloatingProfile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
