import React from "react";
import "./Portfolio.css";
import Review_Demand from "./Review_Demand.jpg";
import Apppic from "./Apppic.jpg";
import Data_management from "./Data_management.jpg";
import user_training from "./user_training.jpg";
import Store_sAnalysis from "./Store Analysis.jpg";
import Marketing_Analysis from "./Marketing Analysis.jpg";
import Store_Sales_Summary from "./Store Sales Summary.jpg";
const Portfolio = () => {
  let items = [
    {
      Title: "Reporting and Dashboarding",
      Content:
        "We help businesses to talk to their data and obtain actionable insights from it. Our functional expertise helps us tailoring the perfect reports for the business",
      Img: Review_Demand,
    },
    {
      Title: "App Development",
      Content:
        "Create Data Apps to take your BI experience the next level. Features like data write back and simulation on the same screen as your visualization.",
      Img: Apppic,
    },
    {
      Title: "Data Management",
      Content:
        "Want to setup Data warehouse in Domo or Integrate your Warehouse with Domo, or create Governance reports to track data movement.",
      Img: Data_management,
    },
    {
      Title: "User Training",
      Content:
        "New to BI / Domo and want your brilliant staff to get trained on Domo ? We provide trainings that not only makes them Pro Domo users but also help them connect the business context with the Data.",
      Img: user_training,
    },
  ];
  return (
    <div>
      <div className="Portfolio-img-center">
        <div className="bg"></div>
        <div className="Portfolio-center">
          <div className="all-in-one">
            {items.map((val, i) => {
              return (
                <div key={i}>
                  <div className="Portfolio-flex">
                    <img src={val.Img} className="Portfolio-img img1" />
                    <div className="Portfolio-Content">
                      <h2>{val.Title}</h2>
                      <p>{val.Content}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
            <div className="Portfolio-section">
              <h1>Sample Reports</h1>
              <div className="imges">
                <div className="center">
                  <img src={Store_sAnalysis} />
                  <h2>Store Analysis</h2>
                </div>
                <div className="center">
                  <img src={Marketing_Analysis} />
                  <h2>Market Analysis</h2>
                </div>
                <div className="center">
                  <img src={Store_Sales_Summary} />
                  <h2>Sales Performance</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
