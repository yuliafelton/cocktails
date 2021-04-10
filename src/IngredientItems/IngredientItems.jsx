import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { deleteIngredient } from "../Actions/ingredientsActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function IngredientItems({ selectedIngredients, dispatch }) {
  const classes = useStyles();

  const handleDelete = useCallback(
    (ingredientToDelete) => {
      dispatch(deleteIngredient(ingredientToDelete));
    },
    [dispatch]
  );

  return (
    <Paper component="ul" className={classes.root}>
      {selectedIngredients.map((ingredient) => {
        return (
          <li key={ingredient}>
            <Chip
              label={ingredient}
              onDelete={() => handleDelete(ingredient)}
              className={classes.chip}
              variant="outlined"
            />
          </li>
        );
      })}
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedIngredients: state.selectedIngredients,
  };
};

export default connect(mapStateToProps)(IngredientItems);
