export function RecipesNew (props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRecipe(params, () => event.target.reset());
  };
  return(
    <div>
      <h1>Create Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Ingredients: <input name="ingredients" type="text" />
        </div>
        <div>
          Instructions: <input name="instructions" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}