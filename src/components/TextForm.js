import React, { useState } from 'react'
import '../styles/TextForm.css'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const [syllables, setSyllables] = useState(0);

    const myStyle = {
        border: '1px solid black',
        margin: '10px',
        padding: '20px',
    }

    const countSyllables = () => {
      const regex = /[aeiouAEIOU]+/g;
      const matches = text.match(regex);
      setSyllables(matches.length);
      props.showAlert("Syllables displayed" , "primary");
    };

    const handleUpperCase = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase" , "primary");
    }

    const handleLowerCase = ()=> {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Text converted to Lowercase" , "primary");
    }

    const handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        alert("Text copied to Clipboard!");
        props.showAlert("Text copied Successfully" , "success");
    }

    const handleClearText = ()=> {
        let clearText = "";
        setSyllables(0);
        setText(clearText);
        props.showAlert("Text has been cleared" , "danger");
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
                <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                <button type="button" class="btn btn-primary my-3 mx-2 custom-button" onClick={handleUpperCase}>Convert to UpperCase</button>
                <button type="button" class="btn btn-primary my-3 mx-2 custom-button" onClick={handleLowerCase}>Convert to LowerCase</button>
                <button type="button" class="btn btn-primary my-3 mx-2 custom-button" onClick={handleCopy}>Copy to ClipBoard</button>
                <button type="button" class="btn btn-primary my-3 mx-2 custom-button" onClick={countSyllables}>Count Syllables</button>
                <button type="button" class="btn btn-primary my-3 mx-2 custom-button" onClick={handleClearText}>Clear Text</button>
            </div>
        </div>
        <div className={`conatiner my-5 text-${props.mode === 'light'?'dark':'light'}`}>
            <h3>Your text report</h3>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <p>Syllables: {syllables}</p>
        </div>
        <div className={`conatiner my-5 text-${props.mode === 'light'?'dark':'light'}`} style={myStyle}>
            <h3>Preveiw</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
