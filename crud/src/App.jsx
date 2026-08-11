import React, { useState } from "react";
import Navbar from "./assets/Components/Navbar";
import Form from "./assets/Components/Form";
import Card from "./assets/Components/Card";

const App = () => {
    const [students, setStudents] = useState([])
    console.log(students);

    let addStudent = (data)=>{
      const newStudent = {
        name :data.name,
        email :data.email,
        course :data.course,
        feePaid :data.feePaid,
      }
        setStudents([...students,newStudent])
        // console.log(students)
    }
  

  return (
    <div className="px-[200px]">
      <Navbar />

      <div className="flex p-10 gap-6">
        <div className="w-[50%]">
          <Form addStudent={addStudent}/>
        </div>

        <div className="w-[50%]">
          <Card />
        </div>
      </div>
      <div>
        
      </div>

    </div>
  );
};

export default App;
