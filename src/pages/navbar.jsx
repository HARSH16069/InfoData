import React from "react";
import logo_img from "./Logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaSearchLocation } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  let [isvalue, setValue] = useState(false);

  let [isvalue1, setValue1] = useState(false);

  return (
    <>
      <nav>
        <AiOutlineMenu
          className={isvalue1 ? "Menu active" : "Menu"}
          onClick={() => {
            setValue1(true);
          }}
        />
        <MdOutlineClose
          className={isvalue1 ? "CloseMenu active" : "CloseMenu"}
          onClick={() => setValue1(false)}
        />
        <div className="logo-img-Title">
          <img src={logo_img} className="logo-img" />
          <h2 className="title">Info Data</h2>
        </div>
        <ul className={isvalue1 ? "ul active" : "ul"}>
          <li className="li">
            <NavLink to="/" className="link" onClick={() => setValue1(false)}>
              Home
            </NavLink>
          </li>

          <li className="li">
            <NavLink
              to="/Portfolio"
              className="link"
              onClick={() => setValue1(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="li">
            <NavLink
              to="/Contact"
              className="link"
              onClick={() => setValue1(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <ul>
          <li className="li search">
            <FaSearchLocation
              className={isvalue ? "Search active" : "Search"}
              onClick={() => setValue(true)}
            />
          </li>
          <li className="li search1">
            <div
              className={isvalue ? "onClick-Search active" : "onClick-Search"}
            >
              <input
                type="text"
                placeholder="Enter City"
                className="Search-input"
              />
              <FaSearchLocation type="submit" className="search-icon" />
              <AiFillCloseCircle
                className="close"
                onClick={() => setValue(false)}
              />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
