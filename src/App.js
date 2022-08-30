import React, { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Nabvar from "./Components/Nabvar";
import TextForm from "./Components/TextForm";
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setToogle] = useState("light");
  const [alert, setAlert] = useState(null);

  const handleAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  function removeClasses(){
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }

  const handleToogle = (cls) => {
    removeClasses();
    document.body.classList.add('bg-' + cls)  
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
      <Nabvar
        title="Text Utils"
        about="About"
        toogleMode={handleToogle}
        mode={mode}
      />
      <Alert alert={alert} />

      <Routes>
        <Route path="/" element={<TextForm showAlert={handleAlert} heading='Enter Text Here' mode={mode}></TextForm>} />
        <Route path="/about" element={<About mode={mode} />}  />
      </Routes>
    </>
  );
}

export default App;
