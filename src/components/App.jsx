import React, { useState } from "react";
import _ from "lodash";


function App() {

const [fName,setFname] = useState("");
const [lName,setLname] = useState("");
const [submitted,setSubmit] = useState(false);

  function handleClick(event){
    setSubmit(true);
    event.preventDefault() 
  }


  function handleChange(event) {
    (event.target.name === "fName") ? setFname(event.target.value) : setLname(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {submitted? _.capitalize(fName) + " " + _.capitalize(lName):"" }</h1>
      <form onChange={handleChange}>
        <input name="fName" placeholder="First Name" value={fName} />
        <input name="lName" placeholder="Last Name" value={lName} />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}


export default App;

