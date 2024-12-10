import DesktopIcon from "@/components/molecules/DesktopIcon";
import Taskbar from "@/components/organisms/Taskbar";

import MCGIHubTranslate from "@/assets/images/html-icon.png";

import Window from "./components/organisms/Window";

const sampleToolbarItems = [
  { title: "Game", items: ["New game", "Exit"] },
  { title: "Help", items: ["Rules", "How to win"] },
];

function App() {
  return (
    <main className="grid bg-desktop-bg-gradient bg-cover bg-center grid-rows-desktop h-screen w-screen overflow-hidden">
      <section className="before:content-[' '] before:bg-desktop-bg-texture before:bg-cover before:bg-center before:absolute before:h-full before:w-full before:opacity-[6%] before:z-0 relative">
        <div className="absolute top-[300px] left-[625px] z-50">
          <DesktopIcon icon={MCGIHubTranslate} title="MCGI Hub Translate" />
        </div>

        <Window
          icon={MCGIHubTranslate}
          title="MCGI Hub Translate"
          toolBarItems={sampleToolbarItems}
        >
          Test
        </Window>
      </section>
      <Taskbar />
    </main>
  );
}

export default App;
