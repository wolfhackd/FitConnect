import React from "react";

const ButtonFunctions = ({ icon, label, color = "bg-white" }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${color} p-4 rounded-md  cursor-pointer transition-all hover:scale-110`}
    >
      {icon && React.createElement(icon, { className: "size-6" })}
      <p className="">{label}</p>
    </div>
  );
};

export default ButtonFunctions;
