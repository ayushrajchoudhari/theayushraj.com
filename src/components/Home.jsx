import "./Home.css";
import Menu from "../components/menu/Menu";
import Hero from "../components/content/hero/Hero";
import About from "../components/content/about/About"
import Team from "./content/team/Team";
import Feedback from "./content/feedback/Feedback";

const Home = () => {
    return(
        <>
        <div className="menu-frame">
          <Menu />
        </div>
        <div className="ar-container">
          <Hero />
          <About />
          <Team />
          <Feedback />
        </div> 
        </>
    )
}

export default Home;