import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpperCase = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase = ()=> {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleChange = (event)=> {
        console.log("User is trying to update the text");
        setText(event.target.value);
    }

  return (
    <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="container mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button type="button" class="btn btn-primary my-3 mx-2" onClick={handleUpperCase}>Convert to UpperCase</button>
                <button type="button" class="btn btn-primary my-3 mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
            </div>
        </div>
        <div className="conatiner my-5">
            <h3>Your text report</h3>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
        </div>
        <div className="container">
            <h3>Preveiw</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
