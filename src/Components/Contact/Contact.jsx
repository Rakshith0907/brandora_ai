import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [fn, setfn] = useState("");
  const [em, setem] = useState("");
  const [mess, setmess] = useState("");

  const fname = (e) => {
    setfn(e.target.value);
  };

  const email = (e) => {
    setem(e.target.value);
  };

  const mes = (e) => {
    setmess(e.target.value);
  };

  const sub = (e) => {
    e.preventDefault()
    if (!fn || !em || !mess) {
      alert("Please fill all the fields");
    } else {
      alert(
        `Hello ${fn} thank you for filling the form, we will contact you at ${em} as soon as possible`,
      );
      setfn("");
      setem("");
      setmess("");
    }
  };

  return (
    <div id="contact" className="contact-main">
      <div className="contact-components">
        <div className="contact-heading">
          <h1>Reach out to us</h1>
          <p>
            From strategy to execution, we craft digital solutions that move
            your business forward
          </p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-top">
              <div className="form-top1">
                <label className="form-label">Your Name</label>
                <input
                  onChange={fname}
                  type="text"
                  className="form-control"
                  value={fn}
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-top2">
                <label className="form-label">Email ID</label>
                <input
                  onChange={email}
                  type="email"
                  className="form-control"
                  value={em}
                  placeholder="Enter you email"
                />
              </div>
            </div>
            <div className="form-bottom">
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  onChange={mes}
                  className="form-control"
                  aria-label="With textarea"
                  value={mess}
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>

            <button onClick={sub} className="btn btn-primary">
              Submit <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
