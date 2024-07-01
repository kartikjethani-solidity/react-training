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
import React, { useRef } from "react";
import "./App.css";
import type { RootState } from "./RTKnewImplementation/redux-toolkit-store/redux-toolkit.store";
import {
  isMovingTowardsCharacter,
  isHoveringBelowTheCharacter,
} from "./RTKnewImplementation/redux-toolkit-store/slices/platform.slice";
import { useSelector, useDispatch } from "react-redux";
import BigComponent from "./RTKnewImplementation/components/BigComponent";
import ButtonsTocall from "./RTKnewImplementation/components/buttons";
import HorizontalMovingDiv from "./RTKnewImplementation/components/platform";
//--------------
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

//--------------
import { OrbitControls, Loader } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Model: React.FC = () => {
  const gltfLoader = new GLTFLoader();
  const dracoLoader = new DRACOLoader(); // Create a DRACOLoader instance

  gltfLoader.setDRACOLoader(dracoLoader); // Pass DRACOLoader instance to GLTFLoader

  const gltf = useLoader(GLTFLoader, "./platform.gltf");
  return <primitive object={gltf.scene} />;
};

const App: React.FC = () => {
  return (
    <>
      <BigComponent />
      {/* <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas> */}
    </>
  );
};

export default App;
