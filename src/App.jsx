import "./App.css";
import "./Utility.css";
import Menu from "./components/menu/Menu";
import Hero from "./components/content/hero/Hero";

const App = () => {
  return (
    <main>
      <div className="ar-wrapper">
        <div className="menu-frame">
          <Menu />
        </div>
        <div className="ar-container">
          <Hero />
        </div>
      </div>
    </main>
  );
};

export default App;
