import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Usercard from "./Components/Usercard";
import Form from "./Components/Form";

const App = () => {
   const [toggle, setToggle] = useState(true)

  return (
    <div className="p-3 h-screen flex flex-col gap-4" >
      <Navbar setToggle={setToggle}/>

      {toggle ? (
        <div className="flex">
        <Usercard />
      </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form />
        </div>
      ) 
      }

    </div>
  );
};

export default App;
