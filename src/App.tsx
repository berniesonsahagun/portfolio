import TaskbarItem from "./components/TaskbarItem";
import Calendar from "./components/calendar/Calendar";
import Minesweeper from "./components/minesweeper/Minesweeper";

function App() {
  return (
    <main className="grid bg-desktop-bg-gradient bg-cover bg-center grid-rows-desktop h-screen w-screen overflow-hidden">
      <section className="before:content-[' '] before:bg-desktop-bg-texture before:bg-cover before:bg-center before:absolute before:h-full before:w-full before:opacity-[6%] before:z-0 relative">
        <div className="sample-icon absolute top-[300px] left-[625px] z-50">
          <img
            className="text-center w-[100px] h-[100px] mx-auto"
            src="./src/assets/images/html2-2.png"
          />
          <span className="text-white text-center text-sm font-MSsans">
            MCGI Hub Translate
          </span>

          <Minesweeper />
        </div>
      </section>
      <nav className="bg-windows shadow-windowBorder">
        <div className="p-1 grid grid-cols-startBar items-center">
          <div className="relative">
            <div className="flex bg-windows shadow-windowInactive absolute w-[277px] h-[255px] bottom-[28px] left-[-4px]">
              <h3 className="bg-window-header-bg writing-vertical font-MSsans text-lg text-white p-1 py-2">
                Bernieson Sahagun
              </h3>
              <div>
                <div className="border-b-[2px] border-white pb-10 outline-1">
                  <div className="flex items-center">About Me</div>
                </div>
                <div className="border-b border-divider">
                  <div className="flex items-center">LinkedIn</div>
                  <div className="flex items-center">Github</div>
                  <div className="flex items-center">Twitter</div>
                </div>
              </div>
            </div>
            <TaskbarItem
              icon={"./src/assets/images/windows-4.png"}
              text="Bernieson"
            />
          </div>

          <ul className="flex mx-2">
            <li>
              <TaskbarItem
                icon={"./src/assets/images/directory_open_cabinet_fc-1.png"}
                text="Sample Text"
              />
            </li>
            <li>
              <TaskbarItem
                icon={"./src/assets/images/directory_open_cabinet_fc-1.png"}
                text="Sample Text"
              />
            </li>
          </ul>
          <Calendar />
        </div>
      </nav>
    </main>
  );
}

export default App;
