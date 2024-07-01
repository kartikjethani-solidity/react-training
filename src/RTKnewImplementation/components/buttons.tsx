import React, { useRef } from "react";
import { RootState } from "../redux-toolkit-store/redux-toolkit.store";
import {
  isMovingTowardsCharacter,
  isHoveringBelowTheCharacter,
  isMovingAwayFromCharacter,
} from "../redux-toolkit-store/slices/platform.slice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isFetched,
  displayBtnClicked,
} from "../redux-toolkit-store/slices/fetchStatus.slice";
interface HorizontalMovingDivProps {
  divRef: React.RefObject<HTMLDivElement>;
  animateDivTo: () => void;
  stopPosition: number;
  animateDivBack: () => void;
  fetchdata: () => void;
}
const ButtonsTocall: React.FC<HorizontalMovingDivProps> = ({
  divRef,
  animateDivTo,
  stopPosition,
  animateDivBack,
  fetchdata,
}) => {
  const platformStatus = useSelector((state: RootState) => state.platform);
  const dispatch = useDispatch();
  const timeElapsedRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fetchStatus = useSelector((state: RootState) => state.fetchStatus);
  //-----
  // handling animation end

  const handleBackChange = (e: any) => {
    animateDivBack();
  };
  const handleFetch = (e: any) => {
    fetchdata();
  };

  const handleDisplay = (e: any) => {
    dispatch(displayBtnClicked());
  };

  const handleChange = (e: any) => {
    animateDivTo();

    console.log(divRef, "divRef object");
    // let i = 0;

    // if (timeElapsedRef.current) {
    //   clearInterval(timeElapsedRef.current);
    // }

    // timeElapsedRef.current = setInterval(() => {
    //   console.log(++i, i === 1 ? " second  elapsed" : "seconds" + " elapsed !");
    // }, 1000);

    // timeoutRef.current = setTimeout(() => {
    //   dispatch(isHoveringBelowTheCharacter());
    //   console.log("Platform reached");
    //   if (timeElapsedRef.current) {
    //     clearInterval(timeElapsedRef.current);
    //     console.log(e);
    //   }
    // }, 4000);
  };

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();

      if (rect.x >= stopPosition) {
        console.log("reached ");
      }
    }
  });
  // Clean up timers when the component unmounts
  // useEffect(() => {
  //   return () => {
  //     if (timeElapsedRef.current) {
  //       clearInterval(timeElapsedRef.current);
  //     }
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //     }
  //   };
  // }, []);

  const a =
    "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 ";
  return (
    <>
      <div className="m-4  relative left-0 bottom-0 grid grid-cols-4 gap-4  ">
        {!platformStatus.isHoveringBelowTheCharacter && (
          <button
            className={`bg-red-300 w-5  h-5  hover:bg-pink-200 duration-300 border-b-2 border-transparent hover:border-pink-700 hover:shadow-lg px-4 py-2 rounded-lg  `}
            onClick={handleChange}
          >
            &nbsp;
          </button>
        )}

        {platformStatus.isHoveringBelowTheCharacter && (
          <button
            className={`bg-yellow-300 w-5 h-5   hover:bg-yellow-200 duration-300 border-b-2 border-transparent hover:border-yellow-700 hover:shadow-lg px-4 py-2 rounded-lg `}
            onClick={handleBackChange}
          ></button>
        )}

        {platformStatus.isHoveringBelowTheCharacter &&
          !fetchStatus.isFetched && (
            <button
              className={`bg-blue-300 w-5 h-5   hover:bg-blue-200 duration-300 border-b-2 border-transparent hover:border-blue-700 hover:shadow-lg px-4 py-2 rounded-lg `}
              onClick={handleFetch}
            ></button>
          )}
        {platformStatus.isHoveringBelowTheCharacter &&
          fetchStatus.isFetched && (
            <button
              className={`bg-green-300 w-5 h-5  hover:bg-green-200 duration-300 border-b-2 border-transparent hover:border-green-600 hover:shadow-lg px-4 py-2 rounded-lg`}
              onClick={handleDisplay}
            ></button>
          )}
      </div>
    </>
  );
};

export default ButtonsTocall;
