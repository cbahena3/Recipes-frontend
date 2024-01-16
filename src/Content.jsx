import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex"
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";

export function Content() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexRecipes = () => {
    console.log("handleIndexRecipes working");
    axios.get("http://localhost:3000/recipes.json").then((response) => {
    console.log(response.data);
    setRecipes(response.data);
  });
  }

  const handleCreateRecipe = (params, successCallback) => {
    console.log("handleCreateRecipe", params);
    axios.post("http://localhost:3000/recipes.json", params).then((response) => {
      setRecipes([...recipes, response.data]);
      successCallback();
    });
  };

  const handleShowRecipe = (recipe) => {
    console.log("handleShowRecipe", recipe);
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  };
    
  const handleUpdateRecipe = (id, params, successCallback) => {
    console.log("handleUpdateRecipe", params);
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then((response) => {
      setRecipes(
        recipes.map((recipe) => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsRecipesShowVisible(false);
  };

  const handleDestroyRecipe = (recipe) => {
    console.log("handleDestroyRecipe", recipe);
    // eslint-disable-next-line no-unused-vars
    axios.delete(`http://localhost:3000/recipes/${recipe.id}.json`).then((response) => {
      setRecipes(recipes.filter((p) => p.id !== recipe.id));
      handleClose();
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/recipes/new" element={<RecipesNew onCreateRecipe={handleCreateRecipe} />} />
        <Route path="/" element={<RecipesIndex recipes={recipes} onShowRecipe={handleShowRecipe} />} />
      </Routes>
      <Modal show={isRecipesShowVisible} onClose={handleClose}>
        <RecipesShow recipe = {currentRecipe} onUpdateRecipe = {handleUpdateRecipe} onDestroyRecipe={handleDestroyRecipe}  />
      </ Modal>
    </div>
  );
}
