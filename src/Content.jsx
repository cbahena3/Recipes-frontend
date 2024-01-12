import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex"

export function Content() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    console.log("handleIndexRecipes working");
    axios.get("http://localhost:3000/recipes.json").then((response) => {
    console.log(response.data);
    setRecipes(response.data);
  });
  }

  useEffect(handleIndexRecipes, []);

  return (
    <main>
      <RecipesIndex recipes ={recipes}/>
    </main>
  );
}