import React from "react";
import "./Support.css";
import icon1 from "../../../img/icon1.png";
import icon2 from "../../../img/icon2.png";
import icon3 from "../../../img/icon3.png";

const Support = () => {
  return (
    <div className="h-2/5 p-12">
      <h1 className="text-4xl font-bold text-center mb-4">
        Core <span className="text-[#0f5e59]">Features</span>
      </h1>
      <p className="text-lg font-medium text-center mb-[40px] mt-3 text-gray-700">
        Revolutionizing government document management with cutting-edge technology
      </p>
      <div className="flex justify-center mediaQuery items-center mb-[100px]">
        <div className="supportItem mx-5 getMargin rounded-2xl">
          <img className="supportImg" src={icon1} alt="AI Classification" />
          <h3 className="text-xl text-center font-semibold">
            AI-Powered Classification
          </h3>
          <p className="text-md text-center font-normal">
            Automatic document categorization and routing using machine learning.
          </p>
        </div>
        <div className="supportItem mx-5 getMargin rounded-2xl">
          <img className="supportImg" src={icon2} alt="Real-Time Tracking" />
          <h3 className="text-xl text-center font-semibold">
            Real-Time Tracking
          </h3>
          <p className="text-md text-center font-normal">
            Live status updates and notifications for document workflows.
          </p>
        </div>
        <div className="supportItem mx-5 getMargin rounded-2xl">
          <img className="supportImg" src={icon3} alt="Multi-Department Collaboration" />
          <h3 className="text-xl text-center font-semibold">
            Multi-Department Collaboration
          </h3>
          <p className="text-md text-center font-normal">
            Seamless inter-departmental document sharing and approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
