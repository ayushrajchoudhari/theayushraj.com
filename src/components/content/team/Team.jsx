import "./Team.css";
import Mate2 from "../../../assets/images/vince-fleming-j3lf-Jn6deo-unsplash.jpg";
import Mate3 from "../../../assets/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import Mate4 from "../../../assets/images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import Mate5 from "../../../assets/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg";
import Github from "../../../assets/icons/github.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";

const Team = () => {
  return (
    <div className="team-frame">
      <section className="team">
        <div className="left">
          <div className="team-heading">
            <h2>
              Meet <span className="h2-thin"> Our </span>
              <br className="break"/>
              Members...
            </h2>
          </div>

          <div className="team-desc">
            <p>
              We are talented individuals who are passionate about bringing
              ideas to life. With a diverse range of backgrounds and skill sets,
              we collaborate to produce effective solutions for our clients.
            </p>
            <p>
              Together, our creative team is committed to delivering impactful
              work that exceeds expectations.
            </p>
          </div>

          <div className="rm-btn">
            <a href="#" className="action-btn">
              <span>Read More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#f98d00"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </a>
          </div>

          <div className="ar-quote">
            <h6 className="quote">
              We
              <span className="h6-thin"> Delivering</span>
              <br />
              Exceptional <span className="h6-thin">Results.</span>
            </h6>
          </div>
        </div>
        <div className="right">
          <div className="one col">
            <div className="model-icon m1">
              <img src={Mate2} alt="" className="mate" />

              <div className="mate-desc">
                <div className="decs-text">
                  <h5>Mate #1</h5>
                  <p>Frontend Dev</p>
                  <div className="social">
                    <img src={Github} alt="" className="social-media" />
                    <img src={Linkedin} alt="" className="social-media" />
                    <img src={Instagram} alt="" className="social-media" />
                    <img src={Facebook} alt="" className="social-media" />
                  </div>
                </div>
              </div>

            </div>
            <div className="model-icon m2">
              <img src={Mate3} alt="" className="mate" />

              <div className="mate-desc">
                <div className="decs-text">
                  <h5>Mate #2</h5>
                  <p>Backend Dev</p>
                  <div className="social">
                    <img src={Github} alt="" className="social-media" />
                    <img src={Linkedin} alt="" className="social-media" />
                    <img src={Instagram} alt="" className="social-media" />
                    <img src={Facebook} alt="" className="social-media" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="two col">
            <p className="m0">
              <span className="star-pt">*</span>
              Official Members.
            </p>
            <div className="model-icon m3">
              <img src={Mate4} alt="" className="mate" />

              <div className="mate-desc">
                <div className="decs-text">
                  <h5>Mate #3</h5>
                  <p>Manager</p>
                  <div className="social">
                    <img src={Github} alt="" className="social-media" />
                    <img src={Linkedin} alt="" className="social-media" />
                    <img src={Instagram} alt="" className="social-media" />
                    <img src={Facebook} alt="" className="social-media" />
                  </div>
                </div>
              </div>

            </div>
            <div className="model-icon m4">
              <img src={Mate5} alt="" className="mate" />

              <div className="mate-desc">
                <div className="decs-text">
                  <h5>Mate #4</h5>
                  <p>UI/UX Designer</p>
                  <div className="social">
                    <img src={Github} alt="" className="social-media" />
                    <img src={Linkedin} alt="" className="social-media" />
                    <img src={Instagram} alt="" className="social-media" />
                    <img src={Facebook} alt="" className="social-media" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
