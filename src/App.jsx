import { useState } from "react"; 
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox"; //importing components
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson); //creating a hook with a state called foods and a method for updating called setFoods. The initial value of foods is set to the foodsJson array

  return ( //this is the html that will be shown when the component is used
    <div className="App"> 
      <h1>LAB | React IronNutrition</h1>
      {/* adding the AddFoodForm component */}
      <AddFoodForm />; 
    {/* mapping the foods array (that has the value of foodsJson) and passing each element to the Foodbox component. Also creating an id key and passing the entire foods array and setFoods method */}
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

export default App; //exporting the App component
