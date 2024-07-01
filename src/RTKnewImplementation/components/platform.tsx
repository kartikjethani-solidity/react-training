// src/HorizontalMovingDiv.tsx

import React, { useRef, useState } from "react";

import { PropsWithChildren } from "react";
const HorizontalMovingDiv: React.FC<{ left: number; top: number }> = ({
  left,
  top,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number | null>(null);

  // const handleMoveClick = () => {
  //   setDistance(left + 96);
  //   animateDivTo(left + 96);
  // };

  // const animateDivTo = (distance: number) => {
  //   if (!divRef.current) return;
  //   divRef.current.style.transform = `translateX(${distance}px)`;
  // };

  return (
    <>
      <div
        ref={divRef}
        className={` w-24  bg-lightblue-500  transform flex justify-center align-items`}
        style={{
          transition: "transform 1s ease-in-out",
          position: "absolute",
          left: `-96px`,
          top: `${top}px`,
        }}
      >
        Moving platform
      </div>
      {/* <button
        onClick={handleMoveClick}
        className="absolute bottom-10 bg-blue-500 text-white py-2 px-4 rounded"
      >
        click here
      </button> */}
    </>
  );
};

export default HorizontalMovingDiv;
