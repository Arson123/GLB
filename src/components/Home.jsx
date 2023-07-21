import React, { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import * as THREE from "three";

export function Home(props) {
  const { nodes, materials } = useGLTF("src/assets/Barn_Testing.glb");

  const [cubeColor, setCubeColor] = useState("white");
  const [cubeColor2, setCubeColor2] = useState("white");
  const [cubeColor3, setCubeColor3] = useState("white");
  const [cubeColor4, setCubeColor4] = useState("white");
  const [cubeColor5, setCubeColor5] = useState("white");

  useEffect(() => {
    // Aquí necesitas usar props.position en lugar de key para cambiar el color dinámicamente.
    // Además, asegúrate de parsear props.position a un número, ya que useEffect recibe una dependencia de tipo número.
    const position = parseInt(props.position);
    switch (position) {
      case 1:
        setCubeColor(props.color);
        break;
      case 2:
        setCubeColor2(props.color);
        break;
      case 3:
        setCubeColor3(props.color);
        break;
      case 4:
        setCubeColor4(props.color);
        break;
      case 5:
        setCubeColor5(props.color);
        break;
      default:
        break;
    }
  }, [props.position, props.color]);

  return (
    <group {...props} dispose={null}>
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry}>
          <meshBasicMaterial color={cubeColor} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Siding_BoardandBatten}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials.Roofing_Shingles_DesertTan}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_4.geometry}
          material={materials.Wood_InteriorFloor}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_5.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_6.geometry}
          material={materials.Metal_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_7.geometry}
          material={materials.Metal_Exterior}
        />
      </group>
      <group scale={[0.008, 0.011, 0.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials.Wood_Trim_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials.Wood_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials.Wood_Trim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall1.geometry}
        >
          <meshBasicMaterial color={cubeColor2} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall2.geometry}
        >
          <meshBasicMaterial color={cubeColor3} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall3.geometry}
        >
          <meshBasicMaterial color={cubeColor4} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LoftedBarn_6Wall_10x12_None_Wall4.geometry}
        >
          <meshBasicMaterial color={cubeColor5} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("src/assets/Barn_Testing.glb");
