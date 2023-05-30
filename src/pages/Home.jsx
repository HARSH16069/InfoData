import React from "react";
import "./Home.css";
import Domo from "./Domo.png";
import Platfrom from "./Platform.png";
import Choose from "./Choose.jpg";
import { NavLink } from "react-router-dom";
const Home = () => {
  const who_title_img = [
    {
      Content:
        "We aim to answer your business queries with the help of DataVilsualization using Domo. We are a Domo exclusive boutiquerendering ose services to companies and individuals wanting to take their business to next level with the help of Domo's BI andData Management Capabilities",
      Img: Domo,
    },
  ];
  return (
    <>
      <div className="Home-img-center">
        <div className="bg"></div>
      </div>

      <div className="Home-center">
        <div className="Home-center1">
          <div>
            <div className="first-section">
              <h1>Who we are</h1>
              <div className="who-title-img">
                <p>{who_title_img[0].Content}</p>
                <div className="Domo-img">
                  <img src={who_title_img[0].Img} className="Domo-img img" />
                  <div className="first-section-link">
                    <NavLink to="/Portfolio" className="first-section-link1">
                      Domo
                    </NavLink>
                  </div>
                </div>
              </div>

              <br />
              <br />
              <br />
              <hr />
            </div>

            <div>
              <div className="first-section">
                <h1>What we do</h1>
                <div className="who-title-img">
                  <div className="Domo-img img">
                    <img src={Platfrom} className="Platfrom" />
                  </div>
                  <ul className="home-ul">
                    <li>Domo Reporting and Dashboarding</li>
                    <li>Custom App Development</li>
                    <li>Domo API Integrations</li>
                    <li>Data Management</li>
                    <li>User Training</li>
                    <li>Instance Governance and Maintenance</li>
                    <li>Converting Existing BI Solution to Domo</li>
                  </ul>
                </div>
                <br />
                <br />
                <br />
                <hr />
              </div>
            </div>
            <div className="first-section">
              <h1 className="Choose-h1">Why Choose Us</h1>
              <div className="who-title-img">
                <ul className="Choose-ul">
                  <li>10+ Years of team experience working on Domo </li>
                  <li>We are specialized in building Domo Apps</li>
                  <li>
                    We can help in integrating Domo with your Tech via Domo APIs
                  </li>
                  <li>
                    Want a write back connector that can send data back to your
                    source system? - We can do it for you!
                  </li>
                  <li>
                    Already have a dashboard, not happy with it ? We can help
                    you improve it
                  </li>
                  <li>
                    Excellent functional knowledge on business domains like
                    S&OP, Finance and Marketing to help the company bridge the
                    gap between data and information
                  </li>
                </ul>
                <img src={Choose} className="Choose-img img " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
