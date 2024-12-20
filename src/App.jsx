import "./App.css";
import { useState } from "react";
import { OfficeTour } from "./Components/OfficeTour";
import { Welcome } from "./Components/PopUps/Welcome";

function App() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);

  return (
    <div className="relative h-full w-full flex justify-center items-center">
      <OfficeTour />

      {isPopUpOpen && <Welcome setIsPopUpOpen={setIsPopUpOpen} />}
    </div>
  );
}

export default App;
