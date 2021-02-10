const FETCH_COCKTAILS_REQUEST = "FETCH_COCKTAILS_REQUEST";
const FETCH_COCKTAILS_SUCCESS = "FETCH_COCKTAILS_SUCCESS";
const FETCH_COCKTAILS_FAIL = "FETCH_COCKTAILS_FAIL";

export const fetchCocktails = () => (dispatch) => {
  dispatch({ type: FETCH_COCKTAILS_REQUEST });

  const cocktailsUrl = "http://localhost:5000/cocktails";

  fetch(cocktailsUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return dispatch({ type: FETCH_COCKTAILS_SUCCESS, payload: "data" });
    })
    .catch((err) => dispatch({ type: FETCH_COCKTAILS_FAIL, payload: err }));
};
