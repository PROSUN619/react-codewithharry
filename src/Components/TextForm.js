import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText]  = useState('Enter Text Here');  

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleOnClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showalert('success','Successfully updated to uppercase');    
  }

  const handleOnClickLower = () => {
    const newText = text.toLowerCase();
    setText(newText);
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <b>{props.label}</b>
        </label>
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button type="button" className="btn btn-primary mx-2" onClick={handleOnClick}>Click to Uppercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleOnClickLower}>Click to Lowercase</button>
        <h1>Your Text Summary</h1>
        <h3>Words - {text.length === 0 ? 0 : text.split(" ").length} Characters {text.length}</h3>
        <br/>
        <h3>Reading Time {((text.length*0.2)/60).toFixed(2)} min</h3>
      </div>
    </div>
  );
}

