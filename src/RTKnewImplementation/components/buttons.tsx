import React, { useRef } from "react";
import { RootState } from "../redux-toolkit-store/redux-toolkit.store";
import {
  isMovingTowardsCharacter,
  isHoveringBelowTheCharacter,
} from "../redux-toolkit-store/slices/platform.slice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isFetched } from "../redux-toolkit-store/slices/fetchStatus.slice";
interface HorizontalMovingDivProps {
  divRef: React.RefObject<HTMLDivElement>;
  animateDivTo: () => void;
}
const ButtonsTocall: React.FC<HorizontalMovingDivProps> = ({
  divRef,
  animateDivTo,
}) => {
  const platformStatus = useSelector((state: RootState) => state.platform);
  const dispatch = useDispatch();
  const timeElapsedRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  //-----
  // handling animation end

  useEffect(() => {
    const handleAnimationEnd = () => {
      console.log("Animation ended");
      // Dispatch action to update platform moving state
      dispatch(isHoveringBelowTheCharacter());
    };

    if (divRef.current) {
      divRef.current.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (divRef.current) {
        divRef.current.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  const handleChange = (e: any) => {
    dispatch(isMovingTowardsCharacter());
    let i = 0;

    if (timeElapsedRef.current) {
      clearInterval(timeElapsedRef.current);
    }

    timeElapsedRef.current = setInterval(() => {
      console.log(++i, i === 1 ? " second  elapsed" : "seconds" + " elapsed !");
    }, 1000);

    // timeoutRef.current = setTimeout(() => {
    //   dispatch(isHoveringBelowTheCharacter());
    //   console.log("Platform reached");
    //   if (timeElapsedRef.current) {
    //     clearInterval(timeElapsedRef.current);
    //     console.log(e);
    //   }
    // }, 4000);
    animateDivTo();
  };

  // Clean up timers when the component unmounts
  useEffect(() => {
    return () => {
      if (timeElapsedRef.current) {
        clearInterval(timeElapsedRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {}, [isMovingTowardsCharacter]);

  const a =
    "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ";
  return (
    <>
      <div className="m-4  relative left-0 bottom-0 grid grid-cols-4 gap-4 ">
        <button
          className={`bg-red-300 w-auto h-auto  rounded-lg ${a}`}
          onClick={handleChange}
        >
          {platformStatus.status}
        </button>

        {platformStatus.isHoveringBelowTheCharacter && (
          <button className={`bg-yellow-300 w-auto h-5 rounded-lg ${a}`}>
            &nbsp;
          </button>
        )}
        {platformStatus.isHoveringBelowTheCharacter && (
          <button className={`bg-blue-300 w-5 h-5 rounded-lg ${a}`}>
            &nbsp;
          </button>
        )}
        {platformStatus.isHoveringBelowTheCharacter && (
          <button className={`bg-green-300 w-5 h-5 rounded-lg ${a}`}>
            &nbsp;
          </button>
        )}
      </div>
    </>
  );
};

export default ButtonsTocall;
