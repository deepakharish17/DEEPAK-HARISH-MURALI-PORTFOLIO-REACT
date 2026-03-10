import "./styles/global.css";
import { ThemeProvider } from "./context/ThemeContext";

import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ position: "relative" }}>
        {/* Global overlays */}
        <Cursor />
        <div className="noise-overlay" />

        {/* Fixed navigation */}
        <Navbar />

        {/* Page sections */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

