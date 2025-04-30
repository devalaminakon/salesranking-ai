import React from "react";
import Container from "../Components/Container";
import Robot1 from "../assets/images/ai-robot.png";
import Robot2 from "../assets/images/ai-robot2.png";
import Icon1 from "../assets/images/icon (1).png";
import Icon2 from "../assets/images/icon (2).png";
import Shape from "../assets/images/shape.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-shape">
        <img src={Shape} alt="" />
      </div>
      <Container>
        <div className="banner-wrapper">
          {/* Left Section */}
          <div className="banner-left-section">
            <h1>
              Your AI- <br />
              Powered <br />
              Sales Coach
            </h1>

            <div className="robot-with-text">
              <div className="left-robot-image">
                <img src={Robot1} alt="image" />
              </div>
              <img src="" alt="" />
              <p>
                Get real-time coaching, script suggestions, and deal-closing
                strategies powered by advanced AI technology.
              </p>
            </div>

            <div className="features">
              <div className="feature-item">
                <div className="left-icon">
                  <img src={Icon1} alt="" />
                </div>
                <div>
                  <h3>2000+</h3>
                  <p>Your protection</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="left-icon">
                <img src={Icon2} alt="" /></div>
                <div>
                  <h3>7001+</h3>
                  <p>Provide tailored</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <div className="robot-image">
                <img src={Robot2} alt="image" />
            </div>
            <div className="overlay-card">
              <div className="stats">
                <h2>721+</h2>
                <h2>1000+</h2>
              </div>
              <p className="title">Growth is our priority.</p>
              <p className="desc">
                As a full-service business agency, we specialize in helping
                companies of all sizes optimize their operations
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
