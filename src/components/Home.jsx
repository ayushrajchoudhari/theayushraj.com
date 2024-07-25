import "./Home.css";
import Menu from "../components/menu/Menu";
import Hero from "../components/content/hero/Hero";
import About from "../components/content/about/About"

const Home = () => {
    return(
        <>
        <div className="menu-frame">
          <Menu />
        </div>
        <div className="ar-container">
          <Hero />
          <About />
        </div> 
        </>
    )
}

export default Home;