import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md text-white hover:bg-indigo-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
