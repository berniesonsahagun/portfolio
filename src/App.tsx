import Desktop from "@/components/Desktop";
import "@react95/core/GlobalStyle";
import "@react95/core/themes/storm.css";
import { ClippyProvider } from "@react95/clippy";
import Clippy from "@/components/Clippy";

function App() {
  return (
    <>
      <ClippyProvider agentName="Clippy">
        <Clippy />
        <Desktop />
      </ClippyProvider>
    </>
  );
}

export default App;
