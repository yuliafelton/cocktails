import SelectIngredients from "../../SelectIngredients/SelectIngredients";
import IngredientItems from "../../IngredientItems/IngredientItems";
import React from "react";
import {connect} from "react-redux";

function FindByIngredients({selectedIngredients}) {
    if (!selectedIngredients) {
        return null;
    }
  return (
    <div>
      <SelectIngredients />
      <IngredientItems />
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        selectedIngredients: state.selectedIngredients,
    };
};

export default connect(mapStateToProps)(FindByIngredients);
