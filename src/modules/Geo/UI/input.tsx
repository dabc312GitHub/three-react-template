import React, { useState, useEffect } from "react";
import './styles.css'
/**
 * Multi purpose text box
 * @param handleSubmit 
 */
export const TextBox = ({ handleSubmit, val = "empty" }: any) => {
    const [text, setText] = useState(val);
  
    const handleChange = (event: any) => {
      setText(event.target.value);
    }
  
    useEffect(() => {
      setText(val);
    }, [val])
  
    return (
      <>
        <br />
        <br />
        <form className="overlay inputTextForm" onSubmit={evt => handleSubmit(evt, text)}>
          <label>
            Format data as below <br />
            <textarea id="textArea" value={text} onChange={handleChange} />
          </label><br />
          <div className="submitBtn">
            <input type="submit" value="process" />
          </div>
        </form>
      </>
    );
  }