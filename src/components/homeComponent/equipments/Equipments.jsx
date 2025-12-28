import React from "react";
import "./Equipments.css";
import doc1 from "../../../img/doc1.png";
import doc2 from "../../../img/doc2.png";
import doc3 from "../../../img/doc3.png";
import doc4 from "../../../img/doc4.png";
import doc5 from "../../../img/doc5.png";
import doc6 from "../../../img/doc6.png";
import doc7 from "../../../img/doc7.png";
import doc8 from "../../../img/doc8.png";

const images = [
  {
    img: doc1,
    title: "Government Orders & Circulars"
  },
  {
    img: doc2,
    title: "Compliance & Regulatory Notices"
  },
  {
    img: doc3,
    title: "Disaster & Emergency Reports"
  },
  {
    img: doc4,
    title: "Inter-Departmental Communications"
  },
  {
    img: doc5,
    title: "Finance & Procurement Files"
  },
  {
    img: doc6,
    title: "HR & Administrative Records"
  },
  {
    img: doc7,
    title: "Scanned & Legacy Documents"
  },
  {
    img: doc8,
    title: "Audit & Review Records"
  }
];

const Equipments = () => {
  return (
    <div className="my-0">
      <div className="mx-16">
        <h1 className="text-center text-4xl font-bold mb-4 text-black">
          Types of <span className="text-[#0f5e59]">Government Documents</span> We Manage
        </h1>
        <p className="text-center text-lg font-medium text-gray-700 mb-10">
          Centralized handling of critical government records and workflows
        </p>
        <div className="grid grid-cols-4 gap-8 mb-[100px]">
          {images.map((image, index) => (
            <div key={image.title} className="w-full relative overflow-hidden" style={{height: '280px', borderRadius: '16px'}}>
              <h1 className="equipTitle">{image.title}</h1>
              <img className="equipImg" src={image.img} alt="" />
              <div className="equipNumber">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
