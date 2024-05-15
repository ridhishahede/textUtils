import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter Text here");

    const handleUpperCase = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleChange = (event)=> {
        console.log("User is trying to update the text");
        setText(event.target.value);
    }

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button type="button" class="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
    </div>
  )
}
