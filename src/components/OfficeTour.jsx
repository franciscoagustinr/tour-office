import "aframe";
// import "aframe-extras";
import { useState } from "react";
import "aframe-html-shader";
import { scenes, hotspots } from "./Utils/TourAssets";

export const OfficeTour = () => {
  const [currentScene, setCurrentScene] = useState("entry");
  const currentSceneData = scenes[currentScene];

  return (
    <a-scene>
      {/* Imagen 360° actual */}
      <a-sky
        src={currentSceneData.image}
        position={currentSceneData.position}
        rotation={currentSceneData.rotation}
      />

      {/* Hotspots */}
      {/* Hotspots dinámicos según la escena actual */}
      {hotspots[currentScene]?.map((hotspot, index) => (
        <a-entity
          key={index}
          geometry="primitive: sphere; radius: 0.4"
          material={`color: ${hotspot.color}`}
          position={hotspot.position}
          text={`value: ${hotspot.label}; align: center; width: 4`}
          class="hotspot"
          onClick={() => setCurrentScene(hotspot.scene)}
        />
      ))}

      <a-camera position="0 1.6 0">
        <a-cursor />
      </a-camera>
    </a-scene>
  );
};

export default OfficeTour;
