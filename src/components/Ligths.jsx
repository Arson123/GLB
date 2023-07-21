import React from "react";
import { useGLTF } from "@react-three/drei";

export function Ligths(props) {
  return (
    <>
      <pointLight position={[5,3,0]} color={"#ffffff"} intensity={2.5}/>
      <pointLight position={[-5,3,0]} color={"#ffffff"} intensity={2.5}/>
      <pointLight position={[-5,0,0]} color={"#ffffff"} intensity={2.5}/>
      <pointLight position={[-5,3,15]} color={"#ffffff"} intensity={2.5}/>
      <ambientLight  position={[0,3,0]} color={"#ffffff"} intensity={0.2} />
    </>
  );
}

useGLTF.preload("src/assets/Barn_Testing.glb");
