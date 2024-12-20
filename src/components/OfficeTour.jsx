import "aframe";
// import "aframe-extras";
import { useState } from "react";
import "aframe-html-shader";

export const OfficeTour = () => {
  const [currentImage, setCurrentImage] = useState(
    "../src/assets/images/entry.jpg"
  );

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
      <a-sky
        src={`url(${currentImage})`}
        rotation="-1.5 90 4"
        position="0 0 -150"
      />

      {/* Hotspots */}
      {/* DESKS */}
      <a-entity
        geometry="primitive: sphere; radius: 0.4"
        material="color: red"
        position="6 1 -2.2"
        text="value: desks; align: center; width: 4"
        class="hotspot"
        event-set__click={`src: url(${scenes.desks})`}
        onClick={() => setCurrentImage(scenes.desks)}
      />

      {/* 
        <a-entity
            geometry="primitive: sphere; radius: 0.3"
            material="color: blue"
            position="-1 1 -3"
            text="value: Lobby; align: center; width: 4"
            class="hotspot"
            onClick={() => setCurrentImage(scenes.entry)}
        />
      */}

      <a-camera position="0 1.6 0">
        <a-cursor />
      </a-camera>
    </a-scene>
  );
};

export default OfficeTour;
