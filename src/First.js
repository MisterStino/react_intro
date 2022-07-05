import React, { useState } from "react";


import "./App.css";


function App() {

  const list = [
  "Stijn",
  "Sebastiaan",
  "Frank",
  "Marvin",
  "Stefan"
  ];
  //De state die de lijst met studenten bij gaat houden.
  //de useState() functie geeft twee waardes / values terug. Namelijk, 1 de current state, en twee een functie om die state te veranderen / aan te passen.  
  const [studentList, setStudentList] = useState(list);
  const [addStudentInput, setAddStudentInput] = useState('');
  const [removeStudentInput, setRemoveStudentInput] = useState('');


  const removeStudent = () => {
    if (removeStudentInput.length > 0) {
      const newStudentList = studentList.filter(
          (item) =>(item.toLowerCase() !== removeStudentInput.toLowerCase())
        );
      console.log(newStudentList)
      setStudentList(newStudentList)
      setRemoveStudentInput("");
    }
  };

  const addStudent = () => {
    if (addStudentInput.length > 0) {
      console.log(studentList)
      const newStudentList = [...studentList, addStudentInput]
      console.log(newStudentList)
      setStudentList(newStudentList)
      setAddStudentInput("");
    }
  }

  return (
    <div className="app">
      <h1>Amazing Students:</h1>
      <hr></hr>
      {studentList &&
        studentList.map((item, index) => ( //.map kan een tweede argument doorgeven: index -> wat is de index van het element in de huidige iteratie.
          <div key={index}>{item}</div> //Display each item
      ))}
      <hr/>
      <div>
        <h1>Add a student</h1>
        <input name="query" type="text" onChange={(event) => setAddStudentInput(event.target.value)} placeholder="Enter student name"/>
        <button onClick={addStudent} placeholder="Add a grocery item">
        Add
      </button>
      </div>
      <div>
        <h1>Remove a student</h1>
        <input name="query" type="text" onChange={(event) => setRemoveStudentInput(event.target.value)} />
        <button onClick={removeStudent} >
        Remove
      </button>
      </div>
    </div>
  );
}

export default App;

