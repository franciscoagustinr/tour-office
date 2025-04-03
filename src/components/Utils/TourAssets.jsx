export const scenes = {
  entry: {
    image: "../src/assets/images/entry.jpg",
    position: "0 0 -150",
    rotation: "-1.5 90 4",
  },
  desks: {
    image: "../src/assets/images/desks.jpg",
    position: "0 0 -150",
    rotation: "-1.5 150 4",
  },
  workStation: {
    image: "../src/assets/images/work-station.jpg",
    position: "10 0 0",
    rotation: "2 160 0",
  },
  meetingRoom: {
    image: "../src/assets/images/rooms.jpg",
    position: "0 0 -150",
    rotation: "-1.5 90 4",
  },
  diningTable: {
    image: "../src/assets/images/dining-table.jpg",
    position: "0 0 -150",
    rotation: "-1.5 90 4",
  },
};

export const hotspots = {
  entry: [
    {
      position: "6 1 -2.2",
      rotation: "0 -70 -3",
      color: "red",
      label: "Desks",
      scene: "desks",
    },
    {
      position: "-6 1 -1.8",
      rotation: "-10 60 4",
      color: "yellow",
      label: "Meeting Rooms",
      scene: "meetingRoom",
    },
  ],
  desks: [
    {
      position: "10.5 1.25 3",
      rotation: "0 -120",
      color: "blue",
      label: "Workstation",
      scene: "workStation",
    },
    {
      position: "-5 1 -5.5",
      rotation: "0 45",
      color: "orange",
      label: "Entry",
      scene: "entry",
    },
  ],
  workStation: [
    {
      position: "-8 1 -2.5",
      rotation: "0 70",
      color: "green",
      label: "Desks",
      scene: "desks",
    },
  ],
  meetingRoom: [
    {
      position: "-4.7 1 -10",
      rotation: "0 40",
      color: "yellow",
      label: "Dining Table",
      scene: "diningTable",
    },
    {
      position: "7 1 -5",
      rotation: "0 -50",
      color: "orange",
      label: "Entry",
      scene: "entry",
    },
  ],
  diningTable: [
    {
      position: "-10 0 5",
      rotation: "0 140",
      color: "green",
      label: "Meeting Rooms",
      scene: "meetingRoom",
    },
  ],
};
