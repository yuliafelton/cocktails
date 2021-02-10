import React from "react";
import FreeSoloCreateOption from "../Search/CocktailsSearch";
import { CocktailsRecipesList } from "../Components/coktailsRecipesList";

function FindByCocktail() {
  return (
    <div>
      <FreeSoloCreateOption />
      <CocktailsRecipesList />
    </div>
  );
}

export default FindByCocktail;
