import React, { useState } from "react";
import _ from "lodash";


function App() {

/* const [fName,setFname] = useState("");
const [lName,setLname] = useState(""); */
const [submitted,setSubmit] = useState(false);

// Using an {} obj fullName.fName e.g 
const [fullName,setFullName] = useState({
  fName: "",
  lName: ""
});


  function handleClick(event){
    setSubmit(true);
    event.preventDefault() 
  }


  function handleChange(event) {
    const {name,value} = event.target; // extract contant into an object
    // (event.target.name === "fName") ? setFname(event.target.value) : setLname(event.target.value);
    (name === "fName") ? fullName.fName = value : fullName.lName = value;
  }

  return (
    <div className="container">
      {/* <h1>Hello {submitted? _.capitalize(fName) + " " + _.capitalize(lName):"" }</h1> */}
      <h1>Welcome {submitted? _.capitalize(fullName.fName) + " " + _.capitalize(fullName.lName):"" }</h1>
      <form onChange={handleChange}>
        <input name="fName" placeholder="Your first name"  />
        <input name="lName" placeholder="Your last name"  />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}


export default App;

