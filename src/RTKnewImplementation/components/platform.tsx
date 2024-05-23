import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import "tailwindcss/tailwind.css";

const MovingObject: React.FC<{ distance: number }> = ({ distance }) => {
  const ref = useRef<any>();
  const { nodes, materials } = useGLTF("/platform.gltf");

  useFrame(() => {
    if (ref.current) {
      ref.current.position.x = distance;
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <mesh
        // geometry={nodes.Mesh_cuttingBoardRound.geometry}
        material={materials.YourMaterialName}
      />
    </group>
  );
};

const HorizontalMovingGltf: React.FC = () => {
  const [distance, setDistance] = useState(0);

  const handleMoveClick = () => {
    const inputDistance = parseInt(
      prompt("Enter horizontal distance in pixels:") || "0",
      10
    );
    setDistance(inputDistance);
  };

  return (
    <div className="relative w-screen h-screen bg-gray-100">
      <Canvas className="absolute w-full h-full">
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <MovingObject distance={distance} />
        </Physics>
      </Canvas>
      <button
        onClick={handleMoveClick}
        className="absolute bottom-10 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Click here
      </button>
    </div>
  );
};

export default HorizontalMovingGltf;
