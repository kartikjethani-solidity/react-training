import React from "react";
import { PropsWithChildren } from "react";
import { useState, useEffect } from "react";
import HorizontalMovingDiv from "./platform";
import ButtonsTocall from "./buttons";
import { useRef } from "react";
import {
  RootState,
  AppDispatch,
} from "../redux-toolkit-store/redux-toolkit.store";
import {
  isHoveringBelowTheCharacter,
  isMovingAwayFromCharacter,
  isMovingTowardsCharacter,
  isOutofTheViewport,
} from "../redux-toolkit-store/slices/platform.slice";
import { useDispatch } from "react-redux";
import { platform } from "os";
import { useSelector } from "react-redux";
import {
  isFetched,
  isFetching,
  fetchUnload,
  fetchUsers,
} from "../redux-toolkit-store/slices/fetchStatus.slice";
const BigComponent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const platformStatus = useSelector((state: RootState) => state.platform);
  const fetchStatus = useSelector((state: RootState) => state.fetchStatus);
  const dispatch = useDispatch();
  const dispatch2 = useDispatch<AppDispatch>();

  const [platformTop, setPlatformTop] = useState<number>(0);
  const [platformLeft, setPlatformLeft] = useState<number>(0);
  const [positionBoard, setPositionBoard] = useState<boolean>(false);
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

  // function animateDivToWithValues(distance: number) {
  //   return function () {
  //     if (!divRef.current) return;
  //     divRef.current.style.transform = `translateX(${distance}px)`;
  //     dispatch(isMovingTowardsCharacter());
  //     // const rect = divRef.current.getBoundingClientRect();
  //     // rect.x += 1;
  //   };
  // }
  ///---
  const divRef2 = useRef<HTMLDivElement>(null);
  useRef(null);
  const [background, setBackground] = useState<string | null>(null);
  // Default background

  const changeBackground = () => {
    setBackground("/giphy.gif"); // Path to the new GIF
  };

  function animateDivToWithValues(distance: number, duration: number) {
    return function () {
      if (!divRef.current) return;

      const div = divRef.current;

      // Apply the transformation
      div.style.transition = `transform ${duration * 1000}ms ease`;
      div.style.transform = `translateX(${distance}px)`;

      // Dispatch the action indicating movement has started
      dispatch(isMovingTowardsCharacter());

      // Set up a timeout to detect when the transition ends
      setTimeout(() => {
        // You can dispatch another action or perform any other operation here
        dispatch(isHoveringBelowTheCharacter());
      }, duration * 1000);
    };
  }

  function animateBackDivToWithValues(distance: number, duration: number) {
    return function () {
      if (!divRef.current) return;

      const div = divRef.current;

      // Apply the transformation
      div.style.transition = `transform ${duration * 1000}ms ease`;
      div.style.transform = `translateX(${distance}px)`;

      // Dispatch the action indicating movement has started
      dispatch(isMovingAwayFromCharacter());
      dispatch(fetchUnload());
      // Set up a timeout to detect when the transition ends
      setTimeout(() => {
        // You can dispatch another action or perform any other operation here
        dispatch(isOutofTheViewport());
      }, duration * 1000);
    };
  }

  function fetchData() {
    return function () {
      dispatch(isFetching());

      dispatch2(fetchUsers());
    };
  }

  //----

  return (
    <>
      {
        <>
          <div
            ref={divRef}
            className=" w-24  rounded-xl  transform flex justify-center align-items"
            style={{
              transition: "transform 1s ease-in-out",
              position: "absolute",
              left: `-96px`,
              top: `${platformTop}px`,
            }}
          >
            Moving platform
          </div>
        </>
      }

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
              animateDivTo={animateDivToWithValues(platformLeft + 96, 3)}
              stopPosition={platformLeft}
              animateDivBack={animateBackDivToWithValues(-96 - platformLeft, 3)}
              fetchdata={fetchData()}
            />
          </div>
        </div>

        {/* Space between Left and Right */}
        <div className="w-1/3">
          <div className="m-4  relative left-0 bottom-0 grid grid-cols-1gap-4  ">
            <div
              className={`bg-red-300 w-20 h-10 mt-2   px-4 py-2 rounded-lg `}
            >
              call
            </div>
            <div
              className={`bg-yellow-300 w-20 h-10 mt-2 px-4  py-2 rounded-lg `}
            >
              send
            </div>
            <div
              className={`bg-blue-300 w-20 h-10 mt-2   px-4 py-2 rounded-lg `}
            >
              Fetch
            </div>
            <div className={`bg-green-300 w-20 h-10 mt-2 px-4 py-2 rounded-lg`}>
              Display
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/3 h-screen p-4">
          {/* Fourth Card */}
          <div className="w-full h-full bg-gray-300 shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-start p-6">
            {/* Message */}
            <p className="text-gray-800 text-xl font-semibold mb-4">
              {!fetchStatus.displayBtnClicked &&
                (!fetchStatus.isFetched
                  ? !fetchStatus.fetchBtnClicked
                    ? platformStatus.status
                    : fetchStatus.fetchMsg
                  : fetchStatus.fetchMsg)}
            </p>

            {/* User List */}
            {fetchStatus.displayBtnClicked && fetchStatus.isFetched && (
              <ul className="w-full space-y-4 mt-4">
                <li
                  key={fetchStatus.fetchData.id}
                  className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center"
                >
                  <p className="text-lg font-medium text-gray-900">
                    {fetchStatus.fetchData.name}
                  </p>
                  <p className="text-gray-700">
                    {fetchStatus.fetchData.category}
                  </p>

                  <p className="text-gray-500 text-sm">
                    {fetchStatus.fetchData.description}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {fetchStatus.fetchData.image && (
                      <img src={fetchStatus.fetchData.image} alt="image" />
                    )}
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BigComponent;
