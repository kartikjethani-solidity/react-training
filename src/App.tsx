// import "./App.css";
// import HorizontalMovingDiv from "./RTKnewImplementation/components/platform";
// // import Counter from "./components/counter";

// export const App: React.FC = () => {
//   return (
//     <>
//       {/* <div className="container">
//         <div className="larger bg-gray-300 h-24 w-64">Larger Div</div>
//         <div className="smaller bg-gray-400 h-12 w-48 mt-4 hidden">
//           Smaller Div
//         </div>
//       </div>
//       <button
//         id="moveButton"
//         className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Move Smaller Div
//       </button> */}
//       {/* <HorizontalMovingDiv /> */}

//     </>
//   );
// };

// export default App;
// src/App.tsx

import React from "react";
import "./App.css";
import type { RootState } from "./RTKnewImplementation/redux-toolkit-store/redux-toolkit.store";
import {
  isMovingTowardsCharacter,
  isHoveringBelowTheCharacter,
} from "./RTKnewImplementation/redux-toolkit-store/slices/platform.slice";
import { useSelector, useDispatch } from "react-redux";
import { platformState } from "./RTKnewImplementation/redux-toolkit-store/slices/platform.slice";
import { clearInterval } from "timers";
const App: React.FC = () => {
  const platformStatus = useSelector((state: RootState) => state.platform);
  const username = useSelector((state: RootState) => state.platform);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(isMovingTowardsCharacter());
    var i = 0;
    var timeElapsed = setInterval(() => {
      console.log(++i, i == 1 ? " second " : "seconds ", " elapsed !");
      if (i == 4) clearInterval(timeElapsed);
    }, 1000);

    setTimeout(() => {
      dispatch(isHoveringBelowTheCharacter());

      console.log("Platform reached  ");
      //why cant i clear TimeElapsed from here
      //no need to do this ? hit and trial : /
    }, 4000);
  };

  const a =
    "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ";
  return (
    <>
      <div className="m-4 absolute left-0 bottom-0  grid grid-cols-1 gap-4 row-auto[10]">
        <button
          className={`bg-red-300 w-20  p-4 rounded-lg  ${a} `}
          onClick={handleChange}
          value={platformStatus.status}
        ></button>

        {platformStatus.isHoveringBelowTheCharacter && (
          <button className={`bg-red-300 w-20 p-4 rounded-lg ${a}`}>
            back
          </button>
        )}

        <button className={`bg-blue-300 w-20  p-4 rounded-lg  ${a} `}>
          fetch
        </button>
        <button className={`bg-green-300 w-20  p-4 rounded-lg  ${a} `}>
          display
        </button>
      </div>
    </>
  );
};

export default App;
