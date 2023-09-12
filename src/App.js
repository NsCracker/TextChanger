import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setMode] =useState("light");

  const [alert, setAlert] =useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


// different mode 

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove("bg-light")
  //   document.body.classList.remove("bg-dark")
  //   document.body.classList.remove("bg-warning")
  //   document.body.classList.remove("bg-danger")
  //   document.body.classList.remove("bg-success")
  // }

  // const fixMode = (cls) =>{
  //   removeBodyClasses();
  //   document.body.classList.add("bg-"+cls)

  //   if(mode ==="light"){
  //         setMode("dark");
  //         document.body.style.backgroundColor = "#030c3f";
  //         showAlert("Dark mode has been enabled", "success");
  //       }
  //       else{
  //         setMode("light");
  //         document.body.style.backgroundColor = "white";
  //         showAlert("Light mode has been enabled","success");
  //       }
  // }


// only dark light mode
  const toggleMode = () =>{
    if(mode ==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#030c3f";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextChanger" aboutText="About" mode={mode} toggleMode={toggleMode} /*fixMode={fixMode}*/ />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
            {/* <Route exact path="/about" element = {<About mode={mode} />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter The Text" mode={mode} />
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
