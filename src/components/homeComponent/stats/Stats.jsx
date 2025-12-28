import React from "react";
import "./Stats.css";
import people from "../../../img/people.svg";
import Documents from "../../../img/Documents.png";
import Graph from "../../../img/Graph.png";
import connected from "../../../img/connected.png";

const Stats = () => {
  return (
    <div className="py-9 bg-#E5E5E5">
      <div className="flex items-center justify-center mx-20 my-0">
        <div className="flex flex-1 flex-col justify-center items-center">
          <img className="statsImg" src={Documents} alt="" />
          <h1 className="text-2xl font-bold mt-7 text-[#0f5e59]">10,000+</h1>
          <p className="text-lg font-normal w-1/2 text-center">
            Documents Processed
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <img className="statsImg" src={Graph} alt="" />
          <h1 className="text-2xl font-bold mt-7 text-[#0f5e59]">60%</h1>
          <p className="text-lg font-normal w-1/2 text-center">
            Faster Decisions
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <img className="statsImg" src={connected} alt="" />
          {/* <div className='relative justify-center items-center'>
                        <img className='makeUp1' src={Ellipse4} alt="" />
                        <img className='makeUp2' src={Ellipse5} alt="" />
                    </div> */}
          <h1 className="text-2xl font-bold mt-7 text-[#0f5e59]">5+</h1>
          <p className="text-lg font-normal w-1/2 text-center">
            Departments Connected
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
