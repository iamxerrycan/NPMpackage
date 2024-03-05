import * as React from "react"

import "./Eye.css";

const  Eye = ({ colour = "grey", width, height }) => {
  return (
    <div className="eye-icon" style={{ width, height }}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={colour}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 17s-4-3-4-5 2-3 4-3 4 1 4 3-3 5-3 5z"
    
        /> */}
        <circle
          cx="12"
          cy="12"
          r={3}
          fill="none"
          stroke={color}
          strokeWidth="2"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"
        />
      </svg>
    </div>
  );
};

export default Eye;
