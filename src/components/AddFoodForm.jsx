import { useState } from "react";
import "../AddFoodForm.css";

const AddFoodForm = (addFood) => {
    //creating hooks containing states representing name, image, calories and servings and methods to update them. Initial state is empty
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [servingsInput, setServingsInput] = useState("");

  const handleSubmit = (event) => { //creating a function to handle the input of data in the form that will be created below
    event.preventDefault(); // prevents the browser reloading
      const newFoodItem = { name, image, calories, servings }; //creating new object consisting of name, image, calories, servings
    setNameInput("");
    setImageInput("");
    setCaloriesInput("");
    setServingsInput("");
  };

  return (
    <div className="foodForm">
      {/* //creating new form, calls handleSubmit method on submission */}
          <form onSubmit={handleSubmit}>
              {/* below are the fields and labels used for each value that needs to be created */}
        <label>
          Name:
          <input
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
            name="name"
            type="text"
          />
        </label>
        <label>
          Image:
          <input
            value={imageInput}
            onChange={(event) => setImageInput(event.target.value)}
            name="name"
            type="text"
          />
        </label>
        <label>
          Calories:
          <input
            value={caloriesInput}
            onChange={(event) => setCaloriesInput(event.target.value)}
            name="name"
            type="text"
          />
        </label>
        <label>
          Servings:
          <input
            value={servingsInput}
            onChange={(event) => setServingsInput(event.target.value)}
            name="name"
            type="text"
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddFoodForm