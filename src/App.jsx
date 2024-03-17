import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Technologies from "./components/technologies/Technologies";
import Snowfall from "react-snowfall";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Contact from "./components/contact/Contact";

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
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Introduction">
        <Parallax type="technologies" />
      </section>
      <section id="Technologies">
        <Technologies />
      </section>
      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}
      <section id="Portfolio">Portfolio</section>
      <section id="Testimonials">Testimonials</section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
