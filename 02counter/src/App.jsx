import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15)
// let counter = 15

const addValue = ()=>{
  if(counter<20){
   setCounter(counter+1);
   return;
  };
 console.log("You hit the Max limit!");
}

const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1);
      return;
  }
  console.log("You hit the Min limit!");
}
  return (
    <>
      <h1>Sagar Nakade - Trial Website</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br /><br/>
      <button
      onClick={removeValue}>Remove Value</button>

    </>
  );
}

export default App;
