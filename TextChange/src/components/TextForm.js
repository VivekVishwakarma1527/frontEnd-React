import React, { useState } from 'react';

export default function TextForm(props) {
  const click = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const textChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("Enter Text");

  return (
    <div>
      <div className="container mb-3">
        <h1>{props.h1}</h1>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example text area</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={textChange} value={text} rows="5"></textarea>
        <button className='btn btn-primary mt-2' onClick={click}>convert to uppercase</button>
        <button className='btn btn-warning mt-2 mx-2' onClick={lowerClick}>convert to Lower</button>
      </div>
      <div className="container mb-3">
        <p>{text.split(" ").length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} times takes to read.</p>
        <h4>Preview Text :</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}
