import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show Details"}
      </button>

      {show && <p>This is my Details.</p>}
    </div>
  );
}

export default ToggleMessage;
