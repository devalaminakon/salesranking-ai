import React from "react";
import Container from "./Container";
import  './responsive.css';

const ReadyToHire = () => {
  return (
    <section className="ready-to-hire">
      <Container>
        <div className="ready-box">
        <h2>Ready to Hire Smarter?</h2>
        <p>Unlock Exclusive Insights. Subscribe to Our Newsletter</p>
        <button className="join-now-btn">Join Now</button>
      </div>
      </Container>
    </section>
  );
};

export default ReadyToHire;
