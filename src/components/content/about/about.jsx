import "./About.css";
import Studio from "../../../assets/images/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import Mate1 from "../../../assets/images/mate1.jpg";

const About = () => {
  return (
    <div className="about-frame">
      <section className="about">
        <div className="left">
          <div className="about-heading">
            <h2>
              Discover <span className="h2-thin"> Our</span>
              <br />
              Work <span className="h2-thin"> Place..</span>
            </h2>
          </div>

          <div className="about-desc">
            <p>
              At our design studio, we are a collective of talented individuals
              ignited by our unwavering passion for transforming ideas into
              reality. With a harmonious blend of diverse backgrounds and a vast
              array of skill sets, we join forces to create compelling solutions
              for our esteemed clients.
            </p>
            <p>
              Collaboration is at the heart of what we do. Our team thrives on
              the synergy that arises when unique perspectives converge,
              fostering an environment of boundless creativity. By harnessing
              our collective expertise, we produce extraordinary results that
              consistently surpass expectations.
            </p>
          </div>
          <div className="ar-quote">
            <div className="model-icon">
              <img src={Mate1} className="model" />
              <span className="play-btn">II</span>
            </div>
            <h6 className="quote">
              Passionately Creating{" "}
              <span className="h6-thin"> New Wonders:</span>
              <br />
              Unleashing <span className="h6-thin">Boundless Creativity.</span>
            </h6>
          </div>
        </div>


        <div className="right">
            <img src={Studio} className="studio" />
        </div>
      </section>
    </div>
  );
};

export default About;
