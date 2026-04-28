import "../../styles/theme.css";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="lg:ml-64">
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
