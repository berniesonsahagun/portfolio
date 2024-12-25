import Desktop from "@/components/Desktop";
//@ts-expect-error this does not include type
import "@react95/core/GlobalStyle";
import "@react95/core/themes/storm.css";

function App() {
  return (
    <>
      <Desktop />
    </>
  );
}

export default App;
