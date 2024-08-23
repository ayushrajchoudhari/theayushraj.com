import "./Footer.css";
import Logo from "../../assets/logo/Ayush.192.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import GitHub from "../../assets/icons/github.svg";
import LinkedIn from "../../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="footer-frame">
      <section className="footer">
      <div className="left">
          <div className="top">
            <img src={Logo} className="f-logo" alt="#" />
            <p className="f-desc">Contact us via Email...</p>
            <div className="f-email">
              <input type="email" placeholder="Email" className="fi-email" />
              <div className="f-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="f-social">
              <a href="#" className="fs-link">
                <img src={LinkedIn} className="f-icon" alt="#" />
              </a>
              <a href="#" className="fs-link">
                <img src={GitHub} className="f-icon" alt="#" />
              </a>
              <a href="#" className="fs-link">
                <img src={Instagram} className="f-icon" alt="#" />
              </a>
              <a href="#" className="fs-link">
                <img src={Facebook} className="f-icon" alt="#" />
              </a>
            </div>
            <p className="f-copyright">
              &#169; Copyright 2024 - Ayush Raj, all right reserved.
            </p>
          </div>

        </div>

        <div className="right">
          <div className="row row-1">
            <ul className="r-left">
              <li className="f-menu">
                <a href="#">Home</a>
              </li>
              <li className="f-menu">
                <a href="#">Service</a>
              </li>
              <li className="f-menu">
                <a href="#">Contact</a>
              </li>
              <li className="f-menu">
                <a href="#">Work</a>
              </li>
              <li className="f-menu">
                <a href="#">Blog</a>
              </li>
            </ul>

            <ul className="r-right">
              <li className="f-option">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="f-option">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="f-option">
                <a href="#">Info</a>
              </li>
            </ul>
          </div>

          <div className="row row-2">
            <div className="r-left">
              <div className="f-heading">Bihar</div>
              <div className="f-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, molestias.
              </div>
            </div>

            <div className="r-right">
              <div className="f-heading">West Bengal</div>
              <div className="f-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                aperiam.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
