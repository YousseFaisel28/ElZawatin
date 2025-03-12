import MyNavbar from "./Components/MyNavbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Challenges from "./Components/Challenges";
import AboutUs from "./Components/AboutUs";
import HowToStart from "./Components/WorkWithUs";
import Myfooter from "./Components/Myfooter";
import BackToTopBtn from "./Components/BackToTopBtn";
import Numbers from "./Components/Numbers";
import { ReactLenis } from "lenis/react";

const App = () => {
  return (
    <ReactLenis root>
      <div>
        <BackToTopBtn />
        <main>
          <Hero />
          <Numbers />
          <Services />
          <Challenges />

          <AboutUs />
          <HowToStart />
        </main>
        <Myfooter />
      </div>
    </ReactLenis>
  );
};

export default App;
