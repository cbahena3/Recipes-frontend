/* eslint-disable react/prop-types */
export function RecipesShow(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateRecipe(props.recipe.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h1>Recipe Information</h1>
      <h2>{props.recipe.name}</h2>
      <h2>ID: {props.recipe.id}</h2>
      <img src={props.recipe.image} />
      <p>Decription: {props.recipe.decription}</p>
      <p>Ingredients: {props.recipe.ingredients}</p>
      <p>Instructions: {props.recipe.instructions}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.recipe.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.recipe.image} name="url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.recipe.description} name="width" type="text" />
        </div>
        <div>
          Ingredients: <input defaultValue={props.recipe.ingredients} name="height" type="text" />
        </div>
        <div>
          Instructions: <input defaultValue={props.recipe.instructions} name="height" type="text" />
        </div>
        <button type="submit">Update recipe</button>
      </form>
    </div>
  );
}