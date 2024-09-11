import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Technologies from "./components/technologies/Technologies";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Introduction from "./components/introduction/Introduction";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <SmoothScroll
        sectionIds={[
          "Homepage",
          "Introduction",
          "Technologies",
          "Portfolio",
          "Testimonials",
          "Contact",
        ]}
      />
      <div className="parallaxBackground">
        <Parallax type="Technologies" />
      </div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Introduction">
        <Introduction />
      </section>
      <section id="Technologies">
        <Technologies />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <div className="parallaxBackgroundTwo">
        <Parallax type="upsidedown" />
      </div>
      <section id="Testimonials">
        {/* add parallax that goes into contact */}
        <Testimonials />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
