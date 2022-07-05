import React from "react";

const StudentListing = (props) => {
  return (
    <div className="student-list">
      {props.studentList &&
        props.studentList.map((item, index) => (
          <div key={index}>{item}</div> //Display each item
        ))}
    </div>
  );
};

export default StudentListing;