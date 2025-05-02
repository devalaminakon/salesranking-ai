import React from "react";
import NoiseBG from "../assets/images/Background Noise.png";
import  './responsive.css';

const BannerNoise = () => {
  return (
    <div
      className="banner-noise"
      style={{
        backgroundImage: `url(${NoiseBG})`,
      }}
    />
  );
};

export default BannerNoise;
