import React from "react";
import "./Contact.css";
import Call from "./Call.jpg";
import Email from "./email.jpg";
const Contact = () => {
  return (
    <div>
      <div className="Contact-img-center">
        <h1>CONTACT US</h1>
        <div className="bg"></div>
      </div>
      <div className="contact-flex">
        <div>
          <img src={Call} className="Contact-img" />
          <h1 className="Contact-h1">+91-9627049569</h1>
        </div>
        <div>
          <img src={Email} className="Contact-img" />
          <h1 className="Contact-h1">aditya@infodata.in</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
