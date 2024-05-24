import React from "react";
import { PropsWithChildren } from "react";
import { useState, useEffect } from "react";
import HorizontalMovingDiv from "./platform";
import ButtonsTocall from "./buttons";
import { useRef } from "react";
import { RootState } from "../redux-toolkit-store/redux-toolkit.store";
import { isMovingTowardsCharacter } from "../redux-toolkit-store/slices/platform.slice";
import { UseDispatch } from "react-redux";
import { useDispatch } from "react-redux";
const BigComponent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [platformTop, setPlatformTop] = useState<number>(0);
  const [platformLeft, setPlatformLeft] = useState<number>(0);
  const [positionBoard, setPositionBoard] = useState<boolean>(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const platformElement = document.getElementById("platform");
    if (platformElement) {
      const { top, left } = platformElement.getBoundingClientRect();
      setPlatformTop(top);
      setPlatformLeft(left);
    }
  }, []);
  // we needed a way to console log so here it is  platFormTop and platForm left
  useEffect(() => {
    console.log("Platform Top:", platformTop);
    console.log("Platform Left:", platformLeft);
    setPositionBoard(true);
  }, [platformTop, platformLeft]);

  //------------------------------------
  const divRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState<number | null>(null);

  function animateDivToWithValues(distance: number) {
    return function () {
      if (!divRef.current) return;
      divRef.current.style.transform = `translateX(${distance}px)`;
      dispatch(isMovingTowardsCharacter());
    };
  }

  return (
    <>
      {positionBoard && (
        <>
          <div
            ref={divRef}
            className={` w-24  bg-lightblue-500  transform flex justify-center align-items`}
            style={{
              transition: "transform 1s ease-in-out",
              position: "absolute",
              left: `-96px`,
              top: `${platformTop}px`,
            }}
          >
            Moving platform
          </div>
          <button
            onClick={animateDivToWithValues(platformLeft + 96)}
            className="absolute bottom-10 bg-blue-500 text-white py-2 px-4 rounded"
          >
            click here
          </button>
          {/* <HorizontalMovingDiv left={platformLeft} top={platformTop} /> */}
        </>
      )}

      <div className="flex ml-64 mr-28">
        {/* Left Side */}
        <div className="w-1/3 h-screen flex flex-col justify-center p-4">
          {/* First Card */}
          <div className="w-full h-2/3 mb-4 bg-gray-100 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
            {/* Content for First Card */}
            character render
          </div>
          {/* Second Card */}
          <div
            id="platform"
            className="w-full h-1/6 mb-4 bg-gray-200 shadow-lg rounded-lg overflow-hidden flex items-center justify-center"
          >
            {/* Content for Second Card */}
          </div>
          {/* Third Card */}
          <div className="w-full h-1/6 mb-4 bg-gray-200 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
            {/* Content for Third Card */}
            <ButtonsTocall
              divRef={divRef}
              animateDivTo={animateDivToWithValues(platformLeft + 96)}
            />
          </div>
        </div>

        {/* Space between Left and Right */}
        <div className="w-1/3"></div>

        {/* Right Side */}
        <div className="w-1/3 h-screen p-4">
          {/* Fourth Card */}
          <div className="w-full h-full bg-gray-300 shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
            {/* Content for Fourth Card */}
            app status
          </div>
        </div>
      </div>
    </>
  );
};

export default BigComponent;
