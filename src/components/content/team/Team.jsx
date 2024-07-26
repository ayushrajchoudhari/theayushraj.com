import "./Team.css";
import Mate2 from "../../../assets/images/vince-fleming-j3lf-Jn6deo-unsplash.jpg";
import Mate3 from "../../../assets/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import Mate4 from "../../../assets/images/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import Mate5 from "../../../assets/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg";

const Team = () => {
  return (
    <div className="team-frame">
      <section className="team">
        <div className="left">
          <div className="team-heading">
            <h2>
              Meet <span className="h2-thin"> Our</span>
              <br />
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
            <div className="model-icon">
              <img src={Mate2} alt="" className="mate" />
            </div>
            <div className="model-icon">
              <img src={Mate3} alt="" className="mate" />
            </div>
          </div>
          <div className="two col">
            <p>
              <span className="star-pt">*</span>
              Official Members.
            </p>
            <div className="model-icon">
              <img src={Mate4} alt="" className="mate" />
            </div>
            <div className="model-icon">
              <img src={Mate5} alt="" className="mate" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
