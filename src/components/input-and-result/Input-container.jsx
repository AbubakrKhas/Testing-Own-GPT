import React, { useState } from 'react';

const InputComponent = () => {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      setDisplayText(inputText);
      setInputText('');

      // Send the entered text to the backend
      sendTextToBackend(inputText);
    }
  };

  const handleButtonClick = () => {
    // Send the entered text to the backend
    sendTextToBackend(inputText);
  };

  const sendTextToBackend = async (text) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/send-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Text sent successfully:", result.received_text);
      } else {
        console.error("Failed to send text:", response.status);
      }
    } catch (error) {
      console.error("Error sending text:", error);
    }
  };

  return (
    <div className='contain-input'>
      <div className="resulted-text">
        {displayText && <p className="output-text">You entered: {displayText}</p>}
      </div>
      <div className="input-box">
        <input
          required
          autoComplete='off'
          className='input-text'
          id='search-engine'
          type="text"
          placeholder="Type here..."
          value={inputText}
          onChange={handleInputChange}
          onKeyPress={handleEnterPress}
        />
        <label htmlFor="search-engine" className='label-input'>
          Was soll das denn?
        </label>
      </div>
      {/* <button onClick={handleButtonClick}>Send Text</button> */}
    </div>
  );
};

export default InputComponent;
