import React from "react";

const Button = ({ value, handleKeyClick, type }) => {
  let buttonType = "bg-gray-100 hover:bg-gray-200 h-10 active:bg-gray-300 ";
  if (type === "reset"){
    buttonType ="bg-red-300 hover:bg-red-400 active:bg-red-500 col-start-4"
  } else if (type === "operator"){
    buttonType = "bg-gray-300 hover:bg-gray-400 active:bg-gray-500"
  } else if (type === "equal"){
    buttonType = "bg-green-300 hover:bg-green-400 active:bg-green-500"
  }
  return (
    <button
      className={`flex items-center  justify-center border-solid border-2 border-gray-600 ${buttonType}`}
      onClick={handleKeyClick}
    >
      {value}
    </button>
  );
}

export default Button;