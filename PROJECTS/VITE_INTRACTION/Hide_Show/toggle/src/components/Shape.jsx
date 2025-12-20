import { useState } from "react";

const Shape = () => {
  const [isBox, setIsBox] = useState(true);

  return (
    <div >
      <button
        onClick={() => setIsBox(!isBox)}
        className="bg-red-500 text-black px-4 py-2 " 
      >
        Change Shape
      </button>

      <div
        className={`mt-4 bg-blue-500 w-24 h-24    ${
          isBox ? "rounded-none" : "rounded-full"
        }`}
      ></div>
    </div>
  );
};

export default Shape;
