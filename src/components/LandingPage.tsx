import Header from "../components/landingPage/header";
import Features from "../components/landingPage/features";
import About from "../components/landingPage/about";
import Services from "../components/landingPage/services";
import Gallery from "../components/landingPage/gallery";
import Testimonials from "../components/landingPage/testimonials";
import Team from "../components/landingPage/team";
import Contact from "../components/landingPage/contact";

const LandingPage = (props) => {
  return (
    <>
      <Header {...props} />
      <Features {...props} />
      <About {...props} />
      <Services {...props} />
      <Gallery {...props} />
      <Testimonials {...props} />
      <Team {...props} />
      <Contact {...props} />
    </>
  );
};

export default LandingPage;
