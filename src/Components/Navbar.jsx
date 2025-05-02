import React from "react";
import Container from "../Components/Container";
import Logo from "../assets/images/logo.png"; // Import your icon image
import BannerNoise from "./BannerNoise";
import  './responsive.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <BannerNoise />
      <Container>
        <div className="navbar-content">
          <img src={Logo} alt="Logo"  className="logo"/>
          <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Consulting</li>
            <li>Ai Coach</li>
          </ul>
          <button className="get-started">Get Started</button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
