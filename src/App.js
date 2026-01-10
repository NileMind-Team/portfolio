import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        {/* <Clients /> */}
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
