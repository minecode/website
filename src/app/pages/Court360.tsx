import "../../styles/theme.css";
import { Navigation } from "../components/Court360/Navigation";
import { Hero } from "../components/Court360/Hero";
import { Stats } from "../components/Court360/Stats";
import { Features } from "../components/Court360/Features";
import { SystemDiagram } from "../components/Court360/SystemDiagram";
import { Demo } from "../components/Court360/Demo";
import { Footer } from "../components/Footer";

export function Court360() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Stats />
        <Features />
        <SystemDiagram />
        <Demo />
        <Footer />
      </main>
    </div>
  );
}
