import { findRenderedComponentWithType } from "react-dom/test-utils";
import { recipes, aisles } from "./recipes";
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

  let produce = [];
  let fridge = [];
  let pantry = [];
  let canned = [];
  let breads = [];
  let frozen = [];

  weeklyRecipes.map((recipe) =>
    recipe.ingredients.map((ingredient, i) => {
      if (aisles.freshProduce.includes(ingredient)) {
        produce.push(ingredient);
      }
      if (aisles.fridgeyStuff.includes(ingredient)) {
        fridge.push(ingredient);
      }
      if (aisles.pantry.includes(ingredient)) {
        pantry.push(ingredient);
      }
      if (aisles.canned.includes(ingredient)) {
        canned.push(ingredient);
      }
      if (aisles.breads.includes(ingredient)) {
        breads.push(ingredient);
      }
      if (aisles.frozen.includes(ingredient)) {
        frozen.push(ingredient);
      }
    })
  );

  return (
    <div className="App">
      <h1>Veggie Vibes</h1>
      <h2>Meals</h2>
      <ul>
        {weeklyRecipes.map((recipeName, i) => (
          <li key={i}>{recipeName.name}</li>
        ))}
      </ul>
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
        <p>Fresh Produce</p>
        {produce.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
        <p>Fridgey Stuff</p>
        {fridge.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
        <p>Pantry</p>
        {pantry.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
        <p>Canned</p>
        {canned.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
        <p>Breads</p>
        {breads.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
        <p>Frozen</p>
        {frozen.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
