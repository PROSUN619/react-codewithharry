import "./App.css";
import About from "./Components/About";
import Nabvar from "./Components/Nabvar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Nabvar title="My Title" about="My About" />
      {/* <TextForm label="Enter Text to Uppercase" /> */}
      <About/>
    </>
  );
}

export default App;
