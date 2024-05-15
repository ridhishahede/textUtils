import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter Text here");

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
    </div>
  )
}
