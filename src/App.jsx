import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Technologies from "./components/technologies/Technologies";
import Snowfall from "react-snowfall";
import SmoothScroll from "./components/smoothScroll/SmoothScroll";
import Contact from "./components/contact/Contact";
import Testimonials from "./components/testimonials/Testimonials";
import Introduction from "./components/introduction/Introduction";

//import TestimonialCarousel from "./components/carousel/TestimonialCarousel";

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
      <section id="Portfolio">Portfolio</section>
      <section id="Testimonials">
        <Testimonials />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
