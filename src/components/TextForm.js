import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success");
  };
  const handleLoClick = () => {
    console.log("Uppercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerCase!","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","success");
  };

  const handleOnchange = (event) => {
    console.log("On change");
    setText(event.target.value);
    
  };
  const handleCopy =()=>{
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!","success");
  }
  const handleExtraSpace = ()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success");
  }

  const [text, setText] = useState("");
  // Text="new text";
  // setText("new text");
  return (
    <>
    <div
    className ="container"style={{ color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control"value={text} onChange={handleOnchange}
           style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : '#042743',}}id="mybox"rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button></div>
        <div
         className="container my-3" style={{ color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length}words and {text.length} character</p>  
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to Preview it here"}</p>
      </div>
    </>
  );
}
