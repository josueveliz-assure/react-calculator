import React from "react";

const Display = ({ result }) => {
  return (
    <div className="flex flex-col items-end justify-center w-[30%] h-20 border-solid border-2 border-gray-600 overflow-x-auto p-4 text-lg">
      {result}
    </div>
  );
}

export default Display;