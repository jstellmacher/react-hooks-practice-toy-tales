import React, { useState, useEffect } from "react";
// !useEffect kind of auto sets up state/ like an event listener (only fetching 1 time)
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
// !---------------------------------!
  const [toys, setToys] = useState([])

  useEffect(()=>{
  fetch('http://localhost:3001/toys')
  .then((r) => r.json())
  .then((data)=>
    setToys(data)
  
  )
}, [])

// !---------------------------------!

  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
