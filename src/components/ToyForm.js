import React, {useState} from "react";



function ToyForm() {
  const [toyName, setToyName] = useState("");
  const [toyImage, setToyImage] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    const newToy = {name: toyName, image: toyImage}
  }
  

  return (
    <div className="container">
     
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={(e)=>setToyName(e.target.value)}
          value={toyName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={(e)=>setToyImage(e.target.value)}
          value={toyImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          // onChange={}
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
