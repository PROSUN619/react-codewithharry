import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import Nabvar from "./Components/Nabvar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setToogle] = useState("light");
  const [alert, setAlert] = useState(null);

  const handleAlert = (type,message) => {
    setAlert({
      type : type,
      message:message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleToogle = () => {
    const newMode = mode === "light" ? "dark" : "light";

    if (newMode === "dark") {
      document.body.style.backgroundColor = "#222e3f";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#222e3f";
    }

    setToogle(newMode);
    // console.log('after' + mode);
  };

  return (
    <>
     <Alert alert={alert}/>
      <Nabvar
        title="My Title"
        about="My About"
        toogleMode={handleToogle}
        mode={mode}
      />
      <TextForm label="Enter Text to Uppercase" mode={mode} showalert={handleAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;
