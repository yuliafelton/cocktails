import { connect } from "react-redux";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function FreeSolo({ cocktailsList }) {
  const myStyle = {
    width: 300,
    margin: "auto",
  };
  return (
    <div style={myStyle}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={cocktailsList.map((option) => option)}
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
    cocktailsList: state.ingredients.cocktailsList,
  };
};

export default connect(mapStateToProps)(FreeSolo);
