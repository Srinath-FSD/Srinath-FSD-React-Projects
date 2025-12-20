import { useState } from "react";

const ClassText = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div >
      <button
        onClick={() => setShowText(!showText)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {showText ? "Hide Text" : "Show Text"}
      </button>

      {showText && (
        <p className="mt-3 text-gray-700">
          This is the text shown below
        </p>
      )}
    </div>
  ); 
};

export default ClassText;
