import React, { useState } from "react";

import StudentListing from "./StudentList";
import InputForm from './InputForm';


import "./App.css";

function App() {

  const list = [
  "Stijn",
  "Sebastiaan",
  "Frank",
  "Marvin",
  "Stefan"
  ];

  const [studentList, setStudentList] = useState(list);
  const [addStudentInput, setAddStudentInput] = useState('');
  const [removeStudentInput, setRemoveStudentInput] = useState('');


  const removeStudent = (student) => {
    if (student.length > 0) {
      const newStudentList = studentList.filter(
          (item) => (item.toLowerCase() !== student.toLowerCase())
        );
      console.log(newStudentList)
      setStudentList(newStudentList)
      setRemoveStudentInput("");
    }
  };

  const addStudent = (student) => {
    console.log(student)
    if (student.length > 0) {
      console.log(studentList)
      const newStudentList = [...studentList, student]
      console.log(newStudentList)
      setStudentList(newStudentList)

    }
  }
  // console.log(addStudentInput)

  return (
    <div className="app">
      <h1>Amazing Students</h1>
      <StudentListing studentList={studentList}/>
      <hr/>
      <InputForm 
        handlerFunction={addStudent}
        title={'Add a student'}
        buttonText={'Add'}
        />
      <InputForm 
        handlerFunction={removeStudent}
        title={'Remove a student'}
        buttonText={'Remove'}
      />
    </div>
  );
}

export default App;