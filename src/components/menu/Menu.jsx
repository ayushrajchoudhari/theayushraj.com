// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { useState } from "react";
import "./Menu.css";

const Menu = () => {
  // useGSAP(() => {
  //     gsap.from (".para", {
  //         y: -100,
  //         scale: 0.5,
  //         delay: 2,
  //         duration: 0.5
  //     })
  // })

  const [active, setActive] = useState(false);

  return (
    <div className="ar-menu">
      <div className="menu-top">
        <div className="menu-logo">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192 62.27"
          >
            <g>
              <path d="m42.8,40.44h0l-3.36-8.44L28.19,3.82l-.93-2.33h-8.46l-.93,2.32h0s-11.24,28.19-11.24,28.19l-3.37,8.44-3.27,8.18h10.32l3.27-8.18h18.89l3.27,8.18h10.32l-3.26-8.18Zm-25.85-8.44l6.08-15.24,6.08,15.24h-12.16Z" />
              <polygon points="78.6 16.13 65.8 45.74 61.06 56.7 58.66 62.27 48.34 62.27 56.33 45.73 43.53 16.13 53.85 16.13 61.06 35.9 68.28 16.13 78.6 16.13" />
              <path d="m81.31,16.12v19.82s-.7,13.29,14.78,13.38c15.48.09,15-13.38,15-13.38v-19.81s-9.43,0-9.43,0v19.81s0,4.99-5.46,4.98-5.46-4.98-5.46-4.98v-19.82h-9.43Z" />
              <path d="m141.91,21.38s-3.15-6.17-13.03-6.17c0,0-12.33,0-12.58,10.93,0,0-1.07,8.05,12.75,10.23,0,0,3.43.53,3.43,3.15-.45,2.62-3.37,2.27-3.37,2.27,0,0-4.86.61-9.06-3.67l-5.68,5.42s4.81,5.78,14.43,5.77c0,0,13.12.57,13.12-10.12,0,0,.96-8.59-12.42-11.3,0,0-3.76-.35-3.76-2.19s1.58-2.36,3.76-2.36,4.72.52,6.91,3.15l5.51-5.11Z" />
              <path d="m146.81,0v48.63h9.43v-19.06s.36-5.78,6.48-5.6c5.59.16,5.68,5.6,5.68,5.6v19.06h9.43v-21.61s-.41-11.46-12.83-11.81c0,0-5.18-.26-8.76,2.8V0h-9.43Z" />
              <polygon points="42.8 40.44 42.8 40.44 39.44 32 42.8 40.44" />
            </g>
            <circle
              className="circle"
              cx="187.26"
              cy="43.86"
              r="4.74"
              fill="#f98d00"
            />
          </svg>
        </div>
        <div className="ar-menu-btn" onClick={()=> setActive(!active)}>
          <div className={active? "activeMenu menu-btn" : "menu-btn"}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
