function FoodBox({ oneFood, foods, setFoods }) {



    const deleteItem = () => { // creating a new function to delete a food item
        const filteredFood = foods.filter(filterItem => { // creating a new array called filteredFood that is the result of using the filter method on the foods array. Each item in the array is checked to see if its id matches foods.id (which doesn't make any sense and I must have done something wrong because foods is an array)
            if (filterItem.id !== foods.id)
                return filteredFood;
        })
    }

    return (
    //   Below is the html for showing each food item. there is also a button that should delete the item it is attahced to, but it doesn't work as I don't have the logic worked out above
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
