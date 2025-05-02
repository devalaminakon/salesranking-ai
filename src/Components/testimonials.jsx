import React, { useState } from "react";
import Container from "../Components/Container";
import SliderImg from "../assets/images/slider.png";
import  './responsive.css';




// Testimonial data
const testimonials = [
  {
    content:
      " They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
    avatar: "",
  },
  {
    content:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Sophia Jensen",
    title: "Marketing Lead at StartX",
    avatar: "",
  },
  {
    content:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
    avatar: "",
  },
  {
    content:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Sophia Jensen",
    title: "Marketing Lead at StartX",
    avatar: "",
  },
  {
    content:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    title: "CEO of Basecamp Corp",
    avatar: "",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [activeBtn, setActiveBtn] = useState(null); 

  const total = testimonials.length;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
    setActiveBtn("right"); 
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
    setActiveBtn("left"); 
  };

  return (
    <div className="testimonia">
    <div className="slider-shappe">
      <img src={SliderImg} alt="" />
    </div>
      <Container className="testimonial-slider-wrapper">
        <div className="testimonia-slice">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`testimonial-slide ${index === current ? "active" : ""}`}
            >
              <p className="testimonial-text">“ {item.content} ”</p>
              <div className="testimonial-footer">
                <div className="testimonial-user">
                  {item.avatar ? (
                    <img src={item.avatar} alt="avatar" className="testimonial-avatar" />
                  ) : (
                    <div className="testimonial-avatar" />
                  )}
                  <div className="testimonial-info">
                    <span className="testimonial-name">{item.name}</span>
                    <span className="testimonial-title">{item.title}</span>
                  </div>
                </div>
                <div className="testimonial-controls">
                  <button
                    className={`testimonial-btn outline ${activeBtn === "left" ? "active" : ""}`}
                    onClick={prev}
                  >
                    &#8592;
                  </button>
                  <span className="testimonial-pagination">
                     <span className="pagination-current">{String(current + 1).padStart(2, "0")}</span>
                     /{String(total).padStart(2, "0")}
                   </span>
                  <button
                    className={`testimonial-btn fill ${activeBtn === "right" ? "active" : ""}`}
                    onClick={next}
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialSlider;
