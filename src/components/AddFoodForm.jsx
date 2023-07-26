import { useState } from "react";

const AddFoodForm = () => {
  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [servingsInput, setServingsInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameInput);
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