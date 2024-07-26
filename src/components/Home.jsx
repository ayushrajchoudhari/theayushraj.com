import "./Home.css";
import Menu from "../components/menu/Menu";
import Hero from "../components/content/hero/Hero";
import About from "../components/content/about/About"
import Team from "./content/team/Team";

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
        </div> 
        </>
    )
}

export default Home;