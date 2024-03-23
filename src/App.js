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
        {weeklyRecipes.map((recipe) =>
          recipe.ingredients.map((ingredient, i) => {
            // console.log(ingredient);
            if (aisles.freshProduce.includes(ingredient)) {
              console.log("success");
            } else {
              console.log("fail")
            }
            return <li key={i}>{ingredient}</li>;
          })
        )}
      </ul>
    </div>
  );
}

export default App;
