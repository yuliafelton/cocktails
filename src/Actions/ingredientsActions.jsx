export const selectIngredient = (ingredient) => ({
  type: "SELECT_INGREDIENT",
  payload: ingredient,
});

export const deleteIngredient = (ingredient) => ({
  type: "DELETE_INGREDIENT",
  payload: ingredient,
});
