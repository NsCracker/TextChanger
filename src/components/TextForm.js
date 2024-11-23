import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    let newText ="";
    setText(newText);
    props.showAlert("text Cleared", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra space removed", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Copy to clipboard", "success");
  };


  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === "dark"?"#4d649b":"white",color: props.mode === "dark"?"white":"black"}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button type="button" disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button type="button" disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button type="button" disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy</button>
      </div>
      <div className="container my-2" style={{color: props.mode === "dark"?"white":"black"}}> 
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words, {text.length} characters</p>
        <p>{0.008*text.split (" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p> {text.length>0?text:"Enter something in the textbox above to Preview it here"} </p>
      </div>
    </>
  );
}
