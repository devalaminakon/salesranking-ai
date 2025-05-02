import React from "react";
import Container from "../Components/Container";
import Noise from "../assets/images/Background Noise2.png";
import Shape from "../assets/images/footer-shape.png";
import Logo from "../assets/images/logo2.png";
import ReadyToHire from "./ReadyToHire ";
import  './responsive.css';

const Footer = () => {
  return (
    <footer className="footer ">
      
    <ReadyToHire />
      <div className="footer-noise">
        <img src={Noise} alt="" />
      </div>
      <div className="footer-shape">
        <img src={Shape} alt="" />
      </div>
      
      <Container>
        <div className="footer-content">
          <div className="footer-left">
          <div className=" logo-column">
            <div className="footer-logo"><img src={Logo} alt="" /></div>
            <p className="footer-description">
            SalesRank.AI offers a comprehensive suite of AI-powered solutions to help you find expert sales professionals who can elevate every aspect of your business. From performance rankings and skill verification to industry benchmarking and real-time analytics, we provide the insights and tools to optimize your sales strategy and drive growth.
            </p>
            <div className="footer-socials">
              <a href="#"><i className="ri-facebook-fill"></i></a>
              <a href="#"><i className="ri-twitter-fill"></i></a>
              <a href="#"><i className="ri-linkedin-fill"></i></a>
              <a href="#"><i className="ri-instagram-line"></i></a>
            </div>
          </div>
          </div>

          <div className="footer-right sidebyside">
          <div className="footer-column">
            <h4>Navigation</h4>
            <a href="#service">Service</a>
            <a href="#agency">Agency</a>
            <a href="#case">Case Study</a>
            <a href="#resource">Resource</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Licence</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#copyright">Copyright</a>
            <a href="#email">Email Address</a>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p><span><i class="ri-phone-fill"></i></span> (406) 555-0120</p>
            <p><span><i class="ri-mail-fill"></i></span> hey@boostim.com</p>
            <p><span><i class="ri-map-pin-2-fill"></i></span> 2972 Westheimer Rd, Santa Ana, IL</p>
          </div>
          </div>
        </div>
      </Container>
      <div className="footer_border"></div>
    </footer>
  );
};

export default Footer;
