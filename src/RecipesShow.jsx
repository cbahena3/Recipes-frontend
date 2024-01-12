/* eslint-disable react/prop-types */
export function RecipesShow(props) {
  return (
    <div>
      <h1>Recipe Information</h1>
      <h2>{props.recipe.name}</h2>
      <h2>ID: {props.recipe.id}</h2>
      <img src={props.recipe.image} />
      <p>Decription: {props.recipe.decription}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Instructions: {props.recipe.instructions}</p>
    </div>
  );
}