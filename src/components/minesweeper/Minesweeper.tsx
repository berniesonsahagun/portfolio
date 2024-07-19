import { useState } from "react";
import Window from "../Window";

export default function Minesweeper() {
  const [closedTiles, setClosedTiles] = useState(100);
  const [numberOfMines, setNumberOfMines] = useState(20);

  return (
    <Window
      windowTitle="Minesweeper"
      windowIcon="./src/assets/images/minesweeper-0.png"
      className="absolute w-[300px] bottom-[30px] right-[-10px]"
    >
      <div className="flex gap-4 px-2 py-1">
        <button>Game</button>
        <button>Help</button>
      </div>

      <div className="shadow-windowInactive p-4">
        <div className="shadow-windowPressed flex justify-between p-4">
          <span className="shadow-windowPressed font-digital bg-black p-1 text-4xl text-red-600">
            {closedTiles < 100 ? `0${closedTiles}` : closedTiles}
          </span>
          <button className="clickable-button">
            <img src="./src/assets/images/utopia_smiley.png" width={30} />
          </button>
          <span className="shadow-windowPressed font-digital bg-black p-1 text-4xl text-red-600">
            {numberOfMines < 100 ? `0${numberOfMines}` : numberOfMines}
          </span>
        </div>
      </div>
    </Window>
  );
}
