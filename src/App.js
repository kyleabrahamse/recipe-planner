import recipes from "./recipes";
import { useState } from "react";

function App() {
  function getRandomObject(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  let [randomRecipe, getRandomRecipe] = useState("");
  let [numRecipes, setNumRecipes] = useState(0);

  function random() {
    getRandomRecipe((randomRecipe = getRandomObject(recipes)));
  }

  console.log(randomRecipe);

  function handleChange(event) {
    setNumRecipes(event.target.value);
  }

  return (
    <div className="App">
      <h1>Veggie Vibes</h1>
      <h2>Meals</h2>
      <div>
        <input type="number" value={numRecipes} onChange={handleChange} />
        <button onClick={random}>Generate Shopping List</button>
      </div>
      <h2>Shopping List</h2>
      <p>{randomRecipe.name}</p>
    </div>
  );
}

export default App;
