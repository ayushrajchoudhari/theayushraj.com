import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-frame">
      <section className="hero">
        <div className="hero-heading">
          <h1>
            Discovering <span className="h1-thin"> a Better </span>
            <br className="break" />
            Approach <span className="h1-thin"> Everyday..</span>
          </h1>
        </div>

        <div className="hero-desc">
          <p>
            Welcome to our world of endless imagination and boundless
            creativity. Together, let's embark on a remarkable journey where
            dreams become tangible realities.
          </p>
        </div>

        <div className="row">
          <div className="wwd-btn">
            <a href="#" className="action-btn">
              <span>What I Do</span>
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

          <div className="works-btn">
            <a href="#" className="action-btn">
              <span>Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#ffffff"
              >
                <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
