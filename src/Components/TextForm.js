import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText]  = useState('Enter Text Here');  

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleOnClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  }

  return (
    <div className="container">
      <div className="mb-3">
        <label Htmlfor="exampleFormControlTextarea1" className="form-label">
          <b>{props.label}</b>
        </label>
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="6"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button type="button" class="btn btn-primary" onClick={handleOnClick}>Click to Uppercase</button>
      </div>
    </div>
  );
}
