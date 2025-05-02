import { useState, useRef, useEffect } from "react";
import Container from "../Components/Container";
import Like1 from "../assets/images/like (1).png";
import Like2 from "../assets/images/like (2).png";
import Like3 from "../assets/images/like (3).png";
import Like4 from "../assets/images/like (4).png";
import Like5 from "../assets/images/like (5).png";
import Frame from "../assets/images/Frame.png";
import Tik from "../assets/images/tik.png";
import Up from "../assets/images/up.png";
import Shape1 from "../assets/images/shape (1).png";
import Shape2 from "../assets/images/shape (2).png";
import  './responsive.css';






function App() {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages,] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your AI sales coach. How can I help you improve your sales performance today?"
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    setChatMessages(prev => [...prev, { sender: "user", text: message }]);

    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: "bot", text: getAIResponse(message) }]);
    }, 1000);

    setMessage("");
  };

  const handleSuggestionClick = (suggestion) => {
    setChatMessages(prev => [...prev, { sender: "user", text: suggestion }]);

    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: "bot", text: getAIResponse(suggestion) }]);
    }, 1000);

    setMessage("");
  };

  const getAIResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();

    if (lowerMsg.includes("objection")) {
      return "When handling objections, follow these steps: 1) Listen carefully, 2) Acknowledge the concern, 3) Ask clarifying questions, 4) Provide a solution, 5) Confirm resolution. Would you like me to elaborate on any specific step?";
    } else if (lowerMsg.includes("email") || lowerMsg.includes("template")) {
      return "Here's a cold email template: \n\nSubject: Quick question about [Their Business]\n\nHi [Name],\n\nI noticed [something specific about their company] and thought you might be interested in [your value proposition]. Would you be open to a quick chat next week to explore potential synergies?\n\nBest regards,\n[Your Name]";
    } else if (lowerMsg.includes("closing") || lowerMsg.includes("technique")) {
      return "Try these closing techniques: 1) Assumptive Close (assume the sale), 2) Alternative Close (offer choices), 3) Summary Close (recap benefits), 4) Urgency Close (limited time offer). Which one would you like to practice?";
    } else if (lowerMsg.includes("negotiation") || lowerMsg.includes("tip")) {
      return "Key negotiation tips: 1) Know your walk-away point, 2) Focus on value not price, 3) Use silence effectively, 4) Look for win-win solutions. Want to role-play a negotiation scenario?";
    } else {
      return "I'm here to help with your sales challenges. Could you provide more details about what you're looking for?";
    }
  };

  return (
    <div className="suggestion-section">
      <Container>
        <div className="coach-title">
          <h5>Live Ai Coach</h5>
          <h1>Take a Suggestion Coaching </h1>
        </div>
        {/* Left Chat Section */}
        <div className="sidebyside sidebylike">
        <div className="chat-box">
          <div className="chat-header">AI Sales Coach</div>

          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.sender === "bot" && index === 0 ? (
              <div className="bot-message-wrapper">
                <div className="bot-avatar"></div>
                <p className="message-text">{msg.text}</p>
              </div>
              ) : (
              <p className="message-text">{msg.text}</p>
                )}
               </div>
               ))}
          <div ref={messagesEndRef} />
        </div>



          <div className="suggestions">
            <button onClick={() => handleSuggestionClick("How do I handle objections?")}>
              How do I handle objections?
            </button>
            <button onClick={() => handleSuggestionClick("Give me a cold email template")}>
              Give me a cold email template
            </button>
            <button onClick={() => handleSuggestionClick("Closing techniques")}>
              Closing techniques
            </button>
            <button onClick={() => handleSuggestionClick("Negotiation tips")}>
              Negotiation tips
            </button>
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask anything you need"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="up" onClick={handleSendMessage}>Send<img src={Up} alt="" /></button> 
          </div>
        </div>

        {/* Right Panel */}
        <div className="analysis-actions">
          <div className="sidebyside sidebylike">
          <div className="like">
            <ul>
              <li><a href="icon"><img src={Like4} alt="" /></a></li>
              <li><a href="icon"><img src={Like2} alt="" /></a></li>
              <li><a href="icon"><img src={Like1} alt="" /></a></li>
              <li><a href="icon"><img src={Like3} alt="" /></a></li>
              <li><a href="icon"><img src={Like5} alt="" /></a></li>
            </ul>
          </div>
          <div className="analysis">
          <div className="analysis-box">
            <h3>Real-time Analysis</h3>
            <div className="confiden">
            <p><span><img src={Tik} alt="" /></span> Confidence Level</p>
            <div className="progress-bar-wrapper">
              <div className="progress-bar">
                <div className="progress-bar-fill"></div>
              </div>
                <span className="progress-label">60%</span>
            </div>
            </div>
            <div className="confiden">
            <p><span><img src={Frame} alt="" /></span>Confidence Level</p>
            <h6>85% improvement in objection handling</h6>
            </div>
          </div>

          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="action-btns">
              <div className="action">
                <img src={Shape2} alt="" />
                 <h4>Generate Script</h4>
                 </div>
              <div className="action">
                <img src={Shape1} alt="" />
                <h4>Practice Pitch</h4>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
