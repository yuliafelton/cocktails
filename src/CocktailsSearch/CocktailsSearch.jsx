import { connect } from "react-redux";
import React, {useCallback} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { setCocktail } from "../Actions/ingredientsActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

function CocktailsSearch({ cocktailsList, selectedCocktail, dispatch }) {
  const myStyle = {
    width: 300,
    margin: "auto",
  };

  const useStyles = makeStyles((theme) => ({
      root: {
          '& > *': {
              margin: theme.spacing(1),
          },
      },
  }));

  const classes = useStyles();

  const handleChange = useCallback((value) => {
    dispatch(setCocktail(value));
  }, [dispatch]);

  if (!cocktailsList.length) {
      return <div>Loading</div>;
  }
  return (
    <div style={myStyle} className={classes.root}>
      <Autocomplete
        id="cocktails-search"
        onChange={(event, value) => handleChange(value)}
        freeSolo
        options={cocktailsList.map((cocktail) => cocktail.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search cocktails"
            margin="normal"
            variant="outlined"
          />
        )}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      cocktailsList: state.cocktailsList,
      selectedCocktail: state.selectedCocktail,
  };
};


export default connect(mapStateToProps)(CocktailsSearch);
