import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-gray-900 mb-4">
                Frequently Asked Questions 🤔
              </h1>
              <p className="text-lg leading-relaxed mx-auto">
                The most common questions about Gov DocFlow AI and how it can help streamline your documentation processes.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold text-lg bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    What is Gov DocFlow AI? 🏛️
                  </summary>

                  <span className="text-justify block px-4 py-2">
                    Gov DocFlow AI is an intelligent document workflow management system designed to streamline government documentation processes using AI-powered automation and smart features.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    How do I upload and manage documents? 📄
                  </summary>

                  <span className="text-justify block px-4 py-2">
                    After logging in, navigate to your dashboard where you can easily upload documents by clicking the "Add Document" button. You can organize, categorize, and track all your documents from a centralized interface.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    Is my data secure? 🔐
                  </summary>

                  <span className="text-justify block px-4 py-2">
                    Yes, we take data security very seriously. All data is encrypted, and we use JWT authentication with OTP verification to ensure only authorized users can access the system.
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    Can I track document workflow status? 📊
                  </summary>

                  <span className="px-4 py-2 text-justify block">
                    Yes, Gov DocFlow AI provides real-time tracking of all document workflows. You can monitor the status of any document, see who has accessed it, and track its progress through different stages.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    Do I need technical expertise to use Gov DocFlow AI? 💻
                  </summary>

                  <span className="px-4 py-2 text-justify block">
                    Not at all! Gov DocFlow AI is designed with a user-friendly interface that requires no technical expertise. Our intuitive design makes document management simple and efficient for everyone.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                    How can I get support? 💬
                  </summary>

                  <span className="px-4 py-2 text-justify block">
                    For any assistance, please visit our{" "}
                    <Link to="/contact">
                      <span className="text-blue-500 underline">
                        Contact Us
                      </span>
                    </Link>{" "}
                    page or use the built-in chat support feature available on your dashboard.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
