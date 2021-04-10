import "./App.css";
import React, {useEffect} from "react";
import Heading from "./Heading/Heading.jsx";
import Navigation from "./Navigation/Navigation";
import FindByIngredients from "./pages/FindByIngredients/FindByIngredients";
import FindByCocktail from "./pages/FindByCocktail/FindByCocktail";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {fetchCocktails} from "./Thunks/cocktailsSearchActions";
import {useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <div>
          <Heading />
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ingredients" component={FindByIngredients} />
            <Route path="/cocktails" component={FindByCocktail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
