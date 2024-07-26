import "./Feedback.css";
import Mate1 from "../../../assets/images/mate1.jpg";
import { useState } from "react";

const Feedback = () => {
  const [activeCard, setActiveCard] = useState("card1");

  return (
    <div className="feedback-frame">
      <section className="feedback">
        <div className="feedback-top">
          <p>
            Customer reviews are a valuable source
            <br />
            of information for both businesses and consumers.
          </p>
        </div>
        <div className="feedback-heading">
          <h2>
            Customer <span className="h2-thin"> Voices:</span>
            <br />
            Hear What <span className="h2-thin"> They Say!</span>
          </h2>
        </div>
        <div className="feedback-customer">
          <div
            className={`customer-card card-up ${
              activeCard === "card1" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card1");
            }}
          >
            <img src={Mate1} className="card" />
          </div>

          <div
            className={`customer-card card-dwn ${
              activeCard === "card2" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card2");
            }}
          >
            <img src={Mate1} className="card" />
          </div>

          <div
            className={`customer-card card-up ${
              activeCard === "card3" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card3");
            }}
          >
            <img src={Mate1} className="card" />
          </div>

          <div
            className={`customer-card card-dwn ${
              activeCard === "card4" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card4");
            }}
          >
            <img src={Mate1} className="card" />
          </div>

          <div
            className={`customer-card card-up ${
              activeCard === "card5" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card5");
            }}
          >
            <img src={Mate1} className="card" />
          </div>

          <div
            className={`customer-card card-dwn ${
              activeCard === "card6" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card6");
            }}
          >
            <img src={Mate1} className="card" />
          </div>

          <div
            className={`customer-card card-up ${
              activeCard === "card7" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card7");
            }}
          >
            <img src={Mate1} className="card" />
          </div>
        </div>
        <div className="feedback-desc">
          <span className="colon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="mil-quote-icon mil-up"
              height="40px"
              width="40px"
            >
              <path
                d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z"
                fill="#f98d00"
              ></path>
            </svg>
          </span>
          <div className="customer-name">
            <h5 className="name">Customer #1</h5>
          </div>
          <div className="customer-text">
            <p className="text">
              This creative agency stands out with their exceptional talent and
              expertise. Their ability to think outside the box and bring unique
              ideas to life is truly impressive. With meticulous attention to
              detail, they consistently deliver visually stunning and impactful
              work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
