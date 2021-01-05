import { v4 as uuidv4 } from "uuid";

function Archiv() {
  return [
    {
      name: "Peaches",
      artist: "Philanthrope, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#5D3933", "#9DB555"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11246",
    },
    {
      name: "Hau Nalu",
      artist: "FloFilz, Kostral One",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#3D367A", "#D8A2BA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10334",
    },
    {
      name: "With Time",
      artist: "Leavv, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#ADD9B7", "#468866"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9925",
    },
  ];
}

export default Archiv;
