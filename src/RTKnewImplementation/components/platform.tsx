// src/HorizontalMovingDiv.tsx

import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";

const HorizontalMovingDiv: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number | null>(null);

  const handleMoveClick = () => {
    const inputDistance = parseInt(
      prompt("Enter horizontal distance in pixels:") || "0"
    );
    setDistance(inputDistance);
    animateDivTo(inputDistance);
  };

  const animateDivTo = (distance: number) => {
    if (!divRef.current) return;
    divRef.current.style.transform = `translateX(${distance}px)`;
  };

  return (
    <div className="relative w-screen h-screen bg-gray-100 flex">
      <div
        ref={divRef}
        className="absolute w-24 h-0 bg-lightblue-500 top-1/2 transform "
        style={{ transition: "transform 1s ease-in-out" }}
      >
        Moving platform
      </div>
      <button
        onClick={handleMoveClick}
        className="absolute bottom-10 bg-blue-500 text-white py-2 px-4 rounded"
      >
        click here
      </button>
    </div>
  );
};

export default HorizontalMovingDiv;
