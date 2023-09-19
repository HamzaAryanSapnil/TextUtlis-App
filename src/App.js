// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// import About from "./components/About";
import {  Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, typemsg) => {
    setAlert({
      msg: message,
      type: type,
      alertType: typemsg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode hasbeen enabled", "success", "Worked" );
    } else {
      setMode("light");
      showAlert("Light Mode hasbeen enabled", "success","Worked");
    }
  };
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  });
  return (
      <>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Alert alert = {alert} />
      <Routes>
        <Route
          path="/"
          element={<Home mode={mode}  showAlert = {showAlert}/>}
        >
           {/* <Route path="/about" element={<About mode={mode} />} /> */}
        </Route>
      </Routes>

      </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
  );
}

export default App;
