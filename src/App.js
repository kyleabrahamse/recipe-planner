import { recipes, aisles } from "./recipes";
import { useState } from "react";
import RecipeList from "./components/list-component/list";

function App() {
  // set state
  const [weeklyRecipes, setWeeklyRecipes] = useState([]);
  const [num, setNum] = useState(0);

  // Populate array of recipes
  function handleClick() {
    const selectedRecipes = [];
    while (selectedRecipes.length < num) {
      const randomRecipe = getRandomRecipe(recipes);
      // Make sure a recipe is not duplicated
      if (!selectedRecipes.includes(randomRecipe)) {
        selectedRecipes.push(randomRecipe);
      }
    }
    setWeeklyRecipes(selectedRecipes);
  }

  // Randomise function
  function getRandomRecipe(arr) {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  }

  function handleChange(event) {
    setNum(event.target.value);
  }

  const produce = [];
  const fridge = [];
  const pantry = [];
  const canned = [];
  const breads = [];
  const frozen = [];

  // Push ingredients to aisle arrays
  weeklyRecipes.forEach((recipe) =>
    recipe.ingredients.forEach((ingredient) => {
      for (const aisle in aisles) {
        if (aisles[aisle].includes(ingredient)) {
          switch (aisle) {
            case "freshProduce":
              addToAisleArray(produce, ingredient);
              break;
            case "fridgeyStuff":
              addToAisleArray(fridge, ingredient);
              break;
            case "pantry":
              addToAisleArray(pantry, ingredient);
              break;
            case "canned":
              addToAisleArray(canned, ingredient);
              break;
            case "breads":
              addToAisleArray(breads, ingredient);
              break;
            case "frozen":
              addToAisleArray(frozen, ingredient);
              break;
            default:
              break;
          }
          break;
        }
      }
    })
  );

  // Function to keep track of ammount of ingredients with key: value pair
  function addToAisleArray(arr, ingredient) {
    const index = arr.findIndex((item) => item.name === ingredient);
    if (index !== -1) {
      arr[index].count++;
    } else {
      arr.push({ name: ingredient, count: 1 });
    }
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
      <RecipeList title="Fresh produce" items={produce} />
      <RecipeList title="Fridgey Stuff" items={fridge} />
      <RecipeList title="Pantry" items={pantry} />
      <RecipeList title="Canned goods" items={canned} />
      <RecipeList title="Frozen" items={frozen} />
    </div>
  );
}

export default App;
