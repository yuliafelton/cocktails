import "./App.css"
import React from "react"
import Heading from "./Header/Heading.jsx"
import Nav from "./Navigation/Nav"
import FindByIngredients from "./Pages/FindByIngredients"
import FindByCocktail from "./Pages/FindByCocktail"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Heading />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ingredients" component={FindByIngredients} />
            <Route path="/cocktails" component={FindByCocktail} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const homePageStyle = {
  color: "#0f0f0d",
}

const Home = () => (
  <div>
    <h1 style={homePageStyle}>You are an alcoholic!</h1>
  </div>
)

export default App
