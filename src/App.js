import recipes from "./recipes";
import { useState } from "react";

function App() {
  const [weeklyRecipes, setWeeklyRecipes] = useState([]);
  const [num, setNum] = useState(0);

  function handleClick() {
    const selectedRecipes = [];
    for (let i = 0; i < num; i++) {
      selectedRecipes.push(getRandomRecipe(recipes));
    }
    setWeeklyRecipes(selectedRecipes);
  }

  function handleChange(event) {
    setNum(event.target.value);
  }

  function getRandomRecipe(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

  console.log(weeklyRecipes);

  return (
    <div className="App">
      <h1>Veggie Vibes</h1>
      <h2>Meals</h2>
      <ul></ul>
      <div>
        <input
          type="number"
          min="0"
          max="7"
          onChange={handleChange}
          value={num}
        />
        <button onClick={handleClick}>Generate Shopping List</button>
      </div>
      <h2>Shopping List</h2>
      <ul>
        {weeklyRecipes.map((recipe, i) => (
          <li key={i}>{recipe.ingredients}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
