import React from "react";
import CocktailsSearch from "../../CocktailsSearch/CocktailsSearch";
import FoundCocktail from "../../components/FoundCocktail/FoundCocktail";

function FindByCocktail() {
  return (
    <div>
      <CocktailsSearch />
      <FoundCocktail />
    </div>
  );
}

export default FindByCocktail;
