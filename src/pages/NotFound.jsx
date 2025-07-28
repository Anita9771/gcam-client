import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#800020] text-[#FFF5E1] flex flex-col justify-center items-center px-6">
      <div className="text-center space-y-6">
        <AlertTriangle className="w-20 h-20 text-[#B0A8B9] mx-auto animate-bounce" />
        <h1 className="text-6xl font-extrabold">404</h1>
        <h2 className="text-2xl font-semibold">Oops! Page Not Found</h2>
        <p className="text-[#FFD8D8] max-w-md mx-auto">
          The page you're looking for might have been removed, renamed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 bg-[#B0A8B9] text-[#800020] px-6 py-3 rounded-full font-medium shadow-md hover:bg-[#d6cddc] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
