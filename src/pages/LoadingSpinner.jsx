import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 transition-all duration-700 ease-in-out">
      <div className="text-center animate-fade-in">
        <h1 className="font-black text-9xl mx-auto inline-flex items-center gap-4">
          <span className="transition-all duration-500 ease-in-out hover:scale-110">
            L
          </span>
          <span className="inline-block transition-transform duration-700 ease-in-out animate-spin-slow">
            <span className="loading loading-spinner text-info w-20 h-20"></span>
          </span>
          <span className="transition-all duration-500 ease-in-out hover:scale-110">
            ading
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingSpinner;