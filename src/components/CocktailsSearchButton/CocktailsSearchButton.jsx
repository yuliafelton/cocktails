import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export function CocktailsSearchButton() {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const handleClick = () => {
      console.log('click');
  };

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Button
              variant="outlined"
              onClick={handleClick}
          >
            Search
          </Button>
        </div>
    );
  }

