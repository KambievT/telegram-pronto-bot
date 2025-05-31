"use client";

import React from "react";

const CafeLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-32 h-32">
        {/* Container for the particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Example particles (dots) */}
          <div className="cafe-particle" style={{ animationDelay: "0s" }}></div>
          <div
            className="cafe-particle"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="cafe-particle"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="cafe-particle"
            style={{ animationDelay: "0.6s" }}
          ></div>
          <div
            className="cafe-particle"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>
      </div>

      {/* Basic CSS for particles and animation */}
      <style jsx>{`
        .cafe-particle {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #a0522d; /* Sienna - coffee color */
          border-radius: 50%;
          opacity: 0;
          transform: translateY(0) scale(0.5);
          animation: cafeFloatFade 2s infinite ease-in-out;
        }

        @keyframes cafeFloatFade {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default CafeLoader;
