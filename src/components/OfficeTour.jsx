import "aframe";
// import "aframe-extras";
import { useState } from "react";

export const OfficeTour = () => {
  const [currentImage, setCurrentImage] = useState(
    "../src/assets/images/entry.jpg"
  );

  // Define las rutas a las imágenes 360°
  const scenes = {
    entry: "../src/assets/images/entry.jpg",
    desks: "../src/assets/images/desks.jpg",
    workStation: "../src/assets/images/work-station.jpg",
    meetingRoom: "../src/assets/images/rooms.jpg",
    diningTable: "../src/assets/images/dining-table.jpg",
  };

  return (
    <a-scene>
      {/* Imagen 360° actual */}
      <a-sky src={`url(${currentImage})`} rotation="0 -90 0"></a-sky>

      {/* Hotspot para ir a la sala de reuniones */}
      <a-entity
        geometry="primitive: sphere; radius: 0.3"
        material="color: red"
        position="-6 1 0.3"
        text="value: desks; align: center; width: 4"
        class="hotspot"
        event-set__click={`src: url(${scenes.desks})`}
        onClick={() => setCurrentImage(scenes.desks)}
      ></a-entity>

      {/* Hotspot para volver al lobby */}
      <a-entity
        geometry="primitive: sphere; radius: 0.3"
        material="color: blue"
        position="-1 1 -3"
        text="value: Lobby; align: center; width: 4"
        class="hotspot"
        onClick={() => setCurrentImage(scenes.entry)}
      ></a-entity>

      {/* Controladores básicos para VR y web */}
      <a-camera position="0 1.6 0">
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  );
};

export default OfficeTour;
