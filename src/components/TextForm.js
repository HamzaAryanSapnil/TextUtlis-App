import React, { useState } from "react";

const TextForm = (props) => {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const textUpper = () => {
    if (text.trim() === "") {
      props.showAlert("Write Something in the text-box", "danger", "Sorry");
    } else {
      setText(text.toUpperCase());
      props.showAlert("Converted to uppercase", "success", "Worked");
    }
    // const newText = text.toUpperCase()
  };
  const textLower = () => {
    if (text.trim() === "") {
      props.showAlert("Write Something in the text-box", "danger", "Sorry");
    } else {
      setText(text.toLowerCase());
    props.showAlert("Converted TO LowerCase", "success","Worked");
    }
    
  };

  const textClear = () => {
    if (text.trim() === "") {
      props.showAlert("Write Something in the text-box", "danger", "Sorry");
    } else {
      setText("");
    props.showAlert("Text is cleared", "success","Worked");
    }
};



  const copyText = () => {
    if (text.trim() === "") {
      props.showAlert("Write Something in the text-box", "danger", "Sorry");
    } else {
      navigator.clipboard.writeText(text);
    props.showAlert("Text Copied To Clipboard", "success","Worked");
    }



    
    
  };
  const removeSpaceExtra = () => {
    if (text.trim() === "") {
      props.showAlert("Write Something in the text-box", "danger", "Sorry");
    } else {
      const removeSpace = text.replace(/\s+/g, " ").trim(); // Fix the regular expression here
      setText(removeSpace);
      props.showAlert("Removed Extra Spaces", "success","Worked");
    }
  };

  return (
    <>
      {/* <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div> */}
      <div className="container my-30 textform" data-bs-theme={props.mode}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1 className="mb-2">{props.heading}</h1>
        </label>
        <textarea
          className="form-control "
          id="exampleFormControlTextarea1"
          rows={12}
          value={text}
          onChange={handleOnChange}
          placeholder="Enter Your Text"
        />
        <div
          className="textbtn"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            className="btn btn-outline-primary my-1 "
            onClick={textUpper}
          >
            Convert To Uppercase
          </button>
          <button
            type="button"
            className="btn btn-outline-primary my-1 "
            onClick={textLower}
          >
            Convert To Lowercase
          </button>
          <button
            type="button"
            className="btn btn-outline-primary my-1 "
            onClick={textClear}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-outline-primary my-1 "
            onClick={copyText}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-outline-primary my-1 "
            onClick={removeSpaceExtra}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="contaienr my-3">
          <h1>Your Text Summary</h1>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} charecters
          </p>
          <p>
            You need{" "}
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minutes To Read
          </p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Nothing to Preview"}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
