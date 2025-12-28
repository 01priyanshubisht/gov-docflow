import React from "react";
import "./Workflow.css";
// import Rectangle73 from "../../../img/Rectangle73.png";
import videoPic from "../../../img/videoPic.png";

const Workflow = () => {
  return (
    <div className=" mb-10 p-12" style={{backgroundColor: 'rgba(15, 94, 89, 0.08)'}}>
      <h1 className="text-4xl font-bold mb-4 text-center text-black">
        Document <span className="text-[#0f5e59]">Processing</span> Workflow
      </h1>
      <p className="text-lg font-medium mb-4 text-gray-700 text-center">
        Simple steps to turn documents into action
      </p>
      <div className="flex justify-around mediaQuery items-center text-[#0f5e59]">
        <div className="grow">
          <ul className="list-none ml-[60px] space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#0f5e59] text-white rounded-full flex items-center justify-center font-bold text-lg">1</span>
              <span className="text-xl font-semibold pt-1.5">Register & Assign Roles</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#0f5e59] text-white rounded-full flex items-center justify-center font-bold text-lg">2</span>
              <span className="text-xl font-semibold pt-1.5">Upload Documents Securely</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#0f5e59] text-white rounded-full flex items-center justify-center font-bold text-lg">3</span>
              <span className="text-xl font-semibold pt-1.5">AI Reads & Summarizes</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#0f5e59] text-white rounded-full flex items-center justify-center font-bold text-lg">4</span>
              <span className="text-xl font-semibold pt-1.5">Smart Department Routing</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#0f5e59] text-white rounded-full flex items-center justify-center font-bold text-lg">5</span>
              <span className="text-xl font-semibold pt-1.5">Track Status & Accountability</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#0f5e59] text-white rounded-full flex items-center justify-center font-bold text-lg">6</span>
              <span className="text-xl font-semibold pt-1.5">Approvals & Notifications</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#0f5e59] text-white rounded-full flex items-center justify-center font-bold text-lg">7</span>
              <span className="text-xl font-semibold pt-1.5">Secure Storage & Audit Trail</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#0f5e59] text-white rounded-full flex items-center justify-center font-bold text-lg">8</span>
              <span className="text-xl font-semibold pt-1.5">Access Anytime</span>
            </li>
          </ul>
        </div>
        <div className="h-1/2 w-1/2">
          {/* <img src={Rectangle73} className='youtubeImg' alt="" /> */}
          <img src={videoPic} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
