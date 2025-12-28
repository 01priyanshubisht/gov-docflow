import React from "react";
import "./Services.css";
import services4 from "../../../img/diagram1.png";

const Services = () => {
  return (
    <div className="h-1/2 mt-3 p-9" style={{backgroundColor: 'rgba(15, 94, 89, 0.08)'}}>
      <div className="flex justify-center flex-col p-9">
        <h1 className="text-4xl mt-2 font-bold m-auto mb-4">How It <span className="text-[#0f5e59]">Works</span></h1>
        <p className="mt-3 text-lg font-medium m-auto text-gray-700">
          Document workflow process for seamless government operations
        </p>
        <img src={services4} className="serviceImg" alt="Document Workflow" />
      </div>
    </div>
  );
};

export default Services;
