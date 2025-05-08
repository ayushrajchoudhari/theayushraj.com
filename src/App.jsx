import "./App.css";
import "./Utility.css";
import Home from "./components/Home";
// import DeviceChecker from "./utility";

const App = () => {
  return (
    <main>
     {/* <DeviceChecker> */}

      <div className="ar-wrapper">
        <Home />
      </div>
    {/* </DeviceChecker> */}
    </main> 
  );
};

export default App;
