import React from "react";
import { NavLink } from "react-router-dom";
import "./Demo and Pricing.css";
const Pricing = () => {
  return (
    <div className="center1">
      <NavLink to="/Contact" className="Pricing">
        Contact Us for Demo and Pricing
      </NavLink>
    </div>
  );
};

export default Pricing;
