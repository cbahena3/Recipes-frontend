/* eslint-disable react/prop-types */
export function RecipesIndex (props) {

  return(
    <div>
      <h1>All recipes</h1>
      {props.recipes.map((recipe) => (
         <div key={recipe.id}>
           <h2>{recipe.name}</h2>
           <h2>ID: {recipe.id}</h2>
           <img src={recipe.image} />
           <p>Decription: {recipe.decription}</p>
           <p>Ingredients: {recipe.ingredients}</p>
           <p>Instructions: {recipe.instructions}</p>
           <button onClick={() => props.onShowRecipe(recipe)}>More Info</button>
         </div>
       ))}
    </div>
  )
}