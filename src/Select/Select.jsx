import React, { useCallback, useState } from "react";
import "./Select.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { selectIngredient } from "../Actions/ingredientsActions.jsx";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  underline: {
    "&:before": {
      borderBottom: "3px solid #ebeb5b",
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: "3px solid #ebeb5b",
    },
    "&:after": {
      borderBottom: "3px solid #ebeb5b",
    },
  },
  disabled: {},
  focused: {},
  error: {},
}));

function SelectForm({ ingredientsList, selectedIngredients, dispatch }) {
  const classes = useStyles();

  // TODO: useMemo
  const selectedIngredientsList = React.useMemo(
    () =>
      ingredientsList.filter(
        (ingredient) => !selectedIngredients.includes(ingredient)
      ),
    [ingredientsList, selectedIngredients]
  );

  // TODO: useCallback
  const handleChange = useCallback(
    (event) => {
      dispatch(selectIngredient(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className="Select">
      <FormControl className={classes.formControl}>
        <label htmlFor="select-ingredient" className="Ingredients-label">
          Enter ingredients:
        </label>
        <Select
          id="select-ingredient"
          value={""}
          onChange={handleChange}
          className={classes.underline}
        >
          {selectedIngredientsList.map((spirit) => (
            <MenuItem key={spirit} value={spirit}>
              {spirit}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ingredientsList: state.ingredients.ingredientsList,
    selectedIngredients: state.ingredients.selectedIngredients,
  };
};

export default connect(mapStateToProps)(SelectForm);
