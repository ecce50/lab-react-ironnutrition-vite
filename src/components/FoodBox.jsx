function FoodBox({ oneFood, foods, setFoods }) {



    const deleteItem = () => {
        const filteredFood = foods.filter(filterItem => {
            if (filterItem.id !== foods.id)
                return filteredFood;
        })
    }


        
  
  
    
        


  return (
    <div>
      <h3>{oneFood.name}</h3>
      <img src={oneFood.image} alt={oneFood.name} style={{ height: "100px" }} />
      <p>Calories: {oneFood.calories}</p>
      <p>Servings: {oneFood.servings}</p>
      <p>
        <b>Total calories: {oneFood.calories * oneFood.servings}</b>
      </p>
      <button onClick={() => deleteItem(oneFood.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
