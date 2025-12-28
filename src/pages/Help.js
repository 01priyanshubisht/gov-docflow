import React from "react";

const Help = () => {
  const helpData = [
    {
      heading: "Q: How do I get started with Gov DocFlow AI? 🚀",
      answer:
        "A: Simply register for an account, verify your email with OTP, and log in to access your dashboard. From there, you can start uploading and managing documents immediately.",
    },
    {
      heading: "Q: How do I upload a document? 📤",
      answer:
        "A: Navigate to your dashboard and click on the 'Upload Document' or 'Add Document' button. Select the file from your device, add relevant details, and submit. The system will automatically process and categorize your document.",
    },
    {
      heading: "Q: Can I collaborate with team members? 👥",
      answer:
        "A: Yes! Gov DocFlow AI includes built-in collaboration tools and chat support that allow you to communicate with team members and stakeholders in real-time.",
    },
    {
      heading: "Q: What types of documents can I manage? 📋",
      answer:
        "A: You can manage all types of government documents including official forms, reports, applications, permits, licenses, and more. The AI automatically classifies documents for better organization.",
    },
    {
      heading: "Q: How does the AI processing work? 🤖",
      answer:
        "A: Our AI automatically analyzes uploaded documents, extracts key information, categorizes them, and suggests relevant actions. This reduces manual work and speeds up your workflow significantly.",
    },
    {
      heading: "Q: Can I track the status of my documents? 🔍",
      answer:
        "A: Absolutely! The dashboard provides real-time tracking of all your documents, showing their current status, who has accessed them, and any pending actions.",
    },
    {
      heading: "Q: Is there mobile support? 📱",
      answer:
        "A: Yes, Gov DocFlow AI is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops.",
    },
    {
      heading: "Q: How do I reset my password? 🔑",
      answer:
        "A: Click on 'Forgot Password' on the login page, enter your registered email, and follow the OTP verification process to reset your password securely.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Help Center 💡
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions and learn how to make the most of Gov DocFlow AI
          </p>
        </div>

        <div className="space-y-6">
          {helpData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.heading}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still need help? 🤝
          </h2>
          <p className="text-gray-700 mb-6">
            Our support team is here to assist you with any questions or concerns.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
