function App() {
  return (
    <main className="grid bg-desktop-bg-gradient bg-cover bg-center grid-rows-desktop h-screen w-screen overflow-hidden">
      <section className="before:content-[' '] before:bg-desktop-bg-texture before:bg-cover before:bg-center before:absolute before:h-full before:w-full before:opacity-[6%] before:z-0 relative">
        <div className="sample-icon absolute top-[300px] left-[625px] z-50">
          <img
            className="text-center w-[100px] h-[100px] mx-auto"
            src="./src/assets/html2-2.png"
          />
          <span className="text-white text-center text-sm font-MSsans">
            MCGI Hub Translate
          </span>
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
            <button className="clickable-button px-2">
              <span>ICON</span>
              <span>Bernieson</span>
            </button>
          </div>

          <ul className="flex mx-2">
            <li>
              <button className="clickable-button mr-[3px]">
                <span>ICON</span>
                <span>Bernieson</span>
              </button>
              <button className="clickable-button px-2 mr-[3px]">
                <span>ICON</span>
                <span>Bernieson</span>
              </button>
              <button className="shadow-windowPressed px-2 mr-[3px]">
                <span>ICON</span>
                <span>Bernieson</span>
              </button>
            </li>
          </ul>
          <button className="clickable-button px-2">
            <span>ICON</span>
            <span>Bernieson</span>
          </button>
        </div>
      </nav>
    </main>
  );
}

export default App;
