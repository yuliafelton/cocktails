const ingredientsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SELECT_INGREDIENT":
      const selectedIngredients = [...state.selectedIngredients, action.payload];
      return { ...state, selectedIngredients };
    case "DELETE_INGREDIENT":
      const newSelectedIngredients = state.selectedIngredients.filter(
        (ingredient) => ingredient !== action.payload
      );
      return { ...state, selectedIngredients: newSelectedIngredients };
    default:
      return state;
  }
};

export default ingredientsReducer;
