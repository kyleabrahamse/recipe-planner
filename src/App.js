import recipes from "./recipes";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Veggie Vibes</h1>
      <h2>Meals</h2>
      <ul></ul>
      <div>
        <input />
        <button>Generate Shopping List</button>
      </div>
      <h2>Shopping List</h2>
    </div>
  );
}

export default App;
