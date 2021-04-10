const cocktailsSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_INGREDIENT":
      const selectedIngredients = [...state.selectedIngredients, action.payload];
      return { ...state, selectedIngredients };
    case "DELETE_INGREDIENT":
      const newSelectedIngredients = state.selectedIngredients.filter(
          (ingredient) => ingredient !== action.payload
      );
      return { ...state, selectedIngredients: newSelectedIngredients };
    case "FETCH_COCKTAILS_SUCCESS":
      const ingredients = new Set();
      action.payload.forEach(cocktail => {
        cocktail.ingredients.forEach(ingredient => ingredients.add(ingredient.ingredient));
      });
      return {...state, ingredientsList: Array.from(ingredients), cocktailsList: action.payload};
    case "SET_COCKTAIL":
      const foundCocktail = state.cocktailsList.find(
          (cocktail) => cocktail.name === action.payload
      );
      return {...state, foundCocktail};
    default:
      return state;
  }
};

export default cocktailsSearchReducer;
