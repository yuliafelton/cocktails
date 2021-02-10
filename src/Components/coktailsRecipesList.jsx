import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchCocktails } from "../Actions/cocktailsSearchActions";

export function CocktailsRecipesList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(fetchCocktails())}> tuk </button>
    </div>
  );
}
