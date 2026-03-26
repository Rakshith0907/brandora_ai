import React, { useRef, useState } from "react";
import "./Footer.css";
 
const Footer = () => {
  const [em,setem] = useState("")
  const email = (e) =>{
    setem(e.target.value)
  }
  const sub = (e) =>{
    e.preventDefault()
    alert(`Thank you for subscribing to our newsletter- ${em}` )
    setem("")
  }

  return (
    <div className="footer-main">
      <div className="footer-components">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-logo">
              <img src="/images/comp-logo-bg.png" alt="imgloading" />
              <h4>
                brandora<span id="footer-ai">.ai</span>
              </h4>
            </div>
            <p>
              From strategy to execution, we craft digital solutions that move
              your business forward
            </p>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#work">Our Work</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
          <div className="footer-top-right">
            <h5>Subscribe to our newsletter</h5>
            <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className="newsinp">
              <input onChange={email} type="email" placeholder="Enter your Email" value={em}/>
              <button onClick={sub} className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright 2025. Rakshith BS. All rights reserved</p>
          <div className="icons">
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.x.com/" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
