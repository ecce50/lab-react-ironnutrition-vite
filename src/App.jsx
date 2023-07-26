import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm />;
      {foods.map((oneFood) => {
        return (
          <FoodBox
            oneFood={oneFood}
            key={oneFood.id}
            foods={foods}
            setFoods={setFoods}
          />
        );
      })}
    </div>
  );
}

export default App;
