import recipes from "./recipes";
import { useState } from "react";

function App() {
  // function to fetch a random recipe object
  function getRandomObject(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  // set state
  let [numRecipes, setNumRecipes] = useState(0);
  let [weeklyRecipes, setWeeklyRecipes] = useState([]);

  // populate recipes for the week
  function random() {
    let a = [];
    for (let i = 0; i < numRecipes; i++) {
      a.push(getRandomObject(recipes));
    }
    setWeeklyRecipes(a);
  }

  // handle input change
  function handleChange(event) {
    setNumRecipes(event.target.value);
  }

  // Process weekly recipes to get a count of all ingredients
  const allIngredients = weeklyRecipes.flatMap((recipe) => recipe.ingredients);
  const ingredientCount = allIngredients.reduce((acc, ingredient) => {
    acc[ingredient] = (acc[ingredient] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="App">
      <h1>Veggie Vibes</h1>
      <h2>Meals</h2>
      <ul>
        {weeklyRecipes.map((a, i) => <li key={i}>{a.name}</li>)}
      </ul>
      <div>
        <input
          type="number"
          value={numRecipes}
          onChange={handleChange}
          min="0"
          max="7"
        />
        <button onClick={random}>Generate Shopping List</button>
      </div>
      <h2>Shopping List</h2>
      <ul>
        {Object.entries(ingredientCount).map(([ingredient, count]) => (
          <li key={ingredient}>
            {ingredient} - {count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
