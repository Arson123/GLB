import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Ligths } from "./Ligths";
import { Home } from "./Home";
import Dropdown from "./DropDown";

const ThreeScene = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleDropdownChange = (number) => {
    setSelectedNumber(number);
  };

  return (
    <>
      <Dropdown onSelect={handleDropdownChange}/>
      <Canvas
        className="scene"
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [1, 1, 15] }}
      >
        <Ligths />
        <Suspense>
          <Home color="blue" position={selectedNumber} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ThreeScene;
