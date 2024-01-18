import Background from "./components/Background";
import { ColorContext, ColorContextProvider } from "./context/ColorContext";
function NewApp() {
  return (
    <>
      <ColorContextProvider>
        <Background />
      </ColorContextProvider>
    </>
  );
}

export default NewApp;
