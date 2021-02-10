const cocktailsSearchReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_COCKTAILS":
      return [action.payload];
    default:
      return state;
  }
};

export default cocktailsSearchReducer;
