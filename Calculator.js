import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState("");

  const handleButtonClick = (event) => {
    const value = event.target.value;
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  
  const  backspace=() => {
    setInput(input.slice(0, -1));
  }

  const handleClear = () => {
    setInput("");
  };

  return (
   
    <div className="calculator">
       
      <div className="calculator-display">{input}</div>
      <div className="calculator-buttons">
      <button onClick={handleClear}>AC</button>
      <button  onClick={backspace} value="C">C</button>
      <button onClick={handleButtonClick} value=""></button>
      <button onClick={handleButtonClick} value="/">/</button>
      <button onClick={handleButtonClick} value="7">7</button>
        <button onClick={handleButtonClick} value="8">8</button>
        <button onClick={handleButtonClick} value="9">9</button>
        <button onClick={handleButtonClick} value="*">*</button>
        <button onClick={handleButtonClick} value="4">4</button>
        <button onClick={handleButtonClick} value="5">5</button>
        <button onClick={handleButtonClick} value="6">6</button>
        <button onClick={handleButtonClick} value="-">-</button>
        <button onClick={handleButtonClick} value="1">1</button>
        <button onClick={handleButtonClick} value="2">2</button>
        <button onClick={handleButtonClick} value="3">3</button>       
        <button onClick={handleButtonClick} value="+">+</button>
        <button  onClick={() => setInput(input + "%")}> % </button>
        <button onClick={handleButtonClick} value="0">0</button>
        <button  onClick={() => setInput(input + ".")}> . </button>   
        <button onClick={handleCalculate}>=</button>
        
      </div>
      </div>
   
  );
}

export default Calculator;