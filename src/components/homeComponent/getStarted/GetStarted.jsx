import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="getStartedSection py-16 bg-white">
      <div className="mx-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Join <span className="text-[#0f5e59]">Document One</span> Platform
          </h2>
          <p className="text-lg font-medium text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We empower government departments and citizens through seamless document management. 
            Upload, track, and manage critical government documents with complete transparency. 
            Through our rigorous security compliance, we ensure that only authorized users gain 
            access to our digital platform. There are two ways to get started:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Government Official / Department User */}
          <div className="getStartedCard bg-gradient-to-br from-[#0f5e59]/5 to-[#0f5e59]/10 p-8 rounded-2xl border-2 border-[#0f5e59]/20 hover:border-[#0f5e59] transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-[#0f5e59] mb-4">
              Register as Government Official*
            </h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              As a government official, start uploading and managing documents by providing 
              department details and access credentials. Get instant classification and routing 
              to relevant departments while maintaining complete audit trails.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              *Register now and start managing documents with one click.
            </p>
            <button 
              onClick={() => navigate("/register")}
              className="w-full bg-[#0f5e59] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#0d5a4d] transition-all duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </div>

          {/* Citizen / Public User */}
          <div className="getStartedCard bg-gradient-to-br from-[#7fd9b8]/10 to-[#7fd9b8]/20 p-8 rounded-2xl border-2 border-[#7fd9b8]/40 hover:border-[#0f5e59] transition-all duration-300 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-[#0f5e59] mb-4">
              Track as Citizen*
            </h3>
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              As a citizen, start tracking and accessing your document submissions in real-time. 
              Check status updates, communicate with departments for clarifications, and 
              experience complete transparency in government processes.
            </p>
            <p className="text-sm text-gray-600 mb-6 italic">
              *Start tracking documents with one click.
            </p>
            <button 
              onClick={() => navigate("/register")}
              className="w-full bg-[#0f5e59] text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-[#0d5a4d] transition-all duration-300 transform hover:scale-105"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
