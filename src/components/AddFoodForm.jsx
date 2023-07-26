import { useState } from "react";

const AddFoodForm = (addFood) => {
    //creating hooks containing states representing name, image, calories and servings and methods to update them. Initial state is empty
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [servingsInput, setServingsInput] = useState("");

  const handleSubmit = (event) => { //creating a function to handle the input of data in the form that will be created below
    event.preventDefault(); // 
      console.log(nameInput);
      const newFoodItem = { name, image, calories, servings };
      AddFood(newFoodItem);
    setNameInput("");
    setImageInput("");
    setCaloriesInput("");
    setServingsInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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