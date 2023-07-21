import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Ligths } from "./Ligths";
import { Home } from "./Home";
import Dropdown from "./DropDown";
import ColorPicker from "./ColorPicker";
import  './styles/ThreeScene.css';

const ThreeScene = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleDropdownChange = (number) => {
    setSelectedNumber(number);
  };

  const handleColorsSelected = (colors) => {
    setSelectedColor(colors);
  };

  return (
    <>
      <div className="options">
        <Dropdown onSelect={handleDropdownChange} />
        <ColorPicker onColorsSelected={handleColorsSelected} />
      </div>

      <Canvas
        className="scene"
        style={{ width: "100vw", height: "100vh" }}
        camera={{ position: [1, 1, 15] }}
      >
        <Ligths />
        <Suspense>
          <Home color={selectedColor} position={selectedNumber} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default ThreeScene;
