import React from "react";

const Button = ({ children }) => {
  return (
    <>
      <div className="bg-primary py-2 w-full text-white rounded-b-lg text-center text-xl cursor-pointer">
        {children}
      </div>
    </>
  );
};

export default Button;
