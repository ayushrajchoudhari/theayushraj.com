import "./Feedback.css";
import Mate1 from "../../../assets/images/mate1.jpg";
import Previous from "../../../assets/icons/previous.svg";
import Next from "../../../assets/icons/next.svg";
import { useState, useEffect } from "react";

const Feedback = () => {
  const [feedToggle, setFeedToggle] = useState(0);
  const [activeCard, setActiveCard] = useState(`card${feedToggle}`);



  let togglePrevious = () => {
    setFeedToggle((prevIdx) => (prevIdx - 1 + 7) % 7);
  }
  
  let toggleNext = () => {
    setFeedToggle((prevIdx) => (prevIdx + 1) % 7);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      toggleNext();
      setActiveCard(`card${(feedToggle+1)%7}`);
    }, 3500); // 3500 milliseconds = 3.5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, );

  const feed = [
    {
      feedIdx: 1,
      img: Mate1,
      name: "Customer #1",
      feedText:
        "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
    },
    {
      feedIdx: 2,
      name: "Customer #2",
      img: Mate1,
      feedText:
        "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
    },
    {
      feedIdx: 3,
      name: "Customer #3",
      img: Mate1,
      feedText:
        "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
    },
    {
      feedIdx: 4,
      name: "Customer #4",
      img: Mate1,
      feedText:
        "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
    },
    {
      feedIdx: 5,
      name: "Customer #5",
      img: Mate1,
      feedText:
        "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
    },
    {
      feedIdx: 6,
      name: "Customer #6",
      img: Mate1,
      feedText:
        "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
    },
    {
      feedIdx: 7,
      name: "Customer #7",
      img: Mate1,
      feedText:
        "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
    }
  ];

  // let fId = Math.floor(Math.random()*10);

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
              activeCard === "card0" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card0");
              setFeedToggle(0);
            }}
          >
            <img src={feed[0].img} className="card" />
          </div>

          <div
            className={`customer-card card-dwn ${
              activeCard === "card1" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card1");
              setFeedToggle(1);
            }}
          >
            <img src={feed[1].img} className="card" />
          </div>

          <div
            className={`customer-card card-up ${
              activeCard === "card2" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card2");
              setFeedToggle(2);
            }}
          >
            <img src={feed[2].img} className="card" />
          </div>

          <div
            className={`customer-card card-dwn ${
              activeCard === "card3" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card3");
              setFeedToggle(3);
            }}
          >
            <img src={feed[3].img} className="card" />
          </div>

          <div
            className={`customer-card card-up ${
              activeCard === "card4" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card4");
              setFeedToggle(4);
            }}
          >
            <img src={feed[4].img} className="card" />
          </div>

          <div
            className={`customer-card card-dwn ${
              activeCard === "card5" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card5");
              setFeedToggle(5);
            }}
          >
            <img src={feed[5].img} className="card" />
          </div>

          <div
            className={`customer-card card-up ${
              activeCard === "card6" ? "active-card" : " "
            }`}
            onClick={() => {
              setActiveCard("card6");
              setFeedToggle(6);
            }}
          >
            <img src={feed[6].img} className="card" />
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
            <h5 className="name">{feed[feedToggle].name}</h5>
          </div>
          <div className="customer-text">
            <p className="text">{feed[feedToggle].feedText}</p>
          </div>

          <div className="arrow-toggle">
            <div className="prev">
              <img
                className="arrow"
                src={Previous}
                onClick={ () => {
                  togglePrevious();
                  setActiveCard(`card${(feedToggle-1+7)%7}`);
                }}
              />
            </div>
            <div className="next">
              <img
                className="arrow"
                src={Next}
                onClick={() => {
                  toggleNext();
                  setActiveCard(`card${(feedToggle+1)%7}`);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
