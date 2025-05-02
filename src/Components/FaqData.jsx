import React, { useState } from 'react';
import Container from "../Components/Container";
import BannerNoise from './BannerNoise';
import  './responsive.css';

const faqData = [
  {
    id: 1,
    question: "Why should I choose Humestic?",
    answer:
      "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
  },
  {
    id: 2,
    question: "I like your works, how do we start a project?",
    answer: "Just reach out through our contact page or send us an email!",
  },
  {
    id: 3,
    question: "What info is required to get a quotation?",
    answer: "Please provide project details, goals, budget, and timeline.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // open first by default

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <BannerNoise />
      <Container>
        {/* NEW: Small top-left label */}
        <div className="faq-label">
            <div className="faq-txt">
            <h4>Frequently asked questions</h4>
            </div>
            <h2> Constant collaboration is how we roll. Let's see if we are a good fit.</h2>
        </div>

        

        <div className="faq-drobdown">
        {faqData.map((item, index) => (
          <div key={item.id} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span className="faq-number">{String(item.id).padStart(2, '0')}</span>
              <span className="faq-title">{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div
              className={`faq-answer-wrapper ${
                activeIndex === index ? 'open' : ''
              }`}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
