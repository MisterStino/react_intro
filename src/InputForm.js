import React, {useState } from 'react'
import './App.css';
const InputForm = ({handlerFunction, title, buttonText}) => {
  const [Input, setInput] = useState('');
  return(
    <div className='input-form'>
      <h1>{title}</h1>
      <input name="query" type="text" onChange={(event) => setInput(event.target.value)} />
      <button onClick={() => {handlerFunction(Input)}} >
      {buttonText}
    </button>
  </div>
  )
}

export default InputForm;