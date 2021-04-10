import { connect } from "react-redux";
import React, {useCallback} from "react";
import '../FoundCocktail/FoundCocktail.css';

function FoundCocktail({ foundCocktail }) {
    if (!foundCocktail) {
        return null;
    };

    return (
        <div className="found-cocktail-box">
            <h3>{foundCocktail.name}</h3>
            <ul className="cocktail-recipe">
                <li><b>Type of glass:</b> {(foundCocktail.glass).charAt(0).toUpperCase() + (foundCocktail.glass).slice(1)}</li>
                <li><b>Category:</b> {foundCocktail.category}</li>
                <li><b>Ingredients:</b>
                    <ul>
                    {foundCocktail.ingredients.map(ingredient => <div>{ingredient.ingredient}</div>)}
                    </ul>
                </li>
                <li><b>Garnish:</b> { !foundCocktail.garnish ? 'None' : foundCocktail.garnish }</li>
                <li><b>Preparation:</b> {foundCocktail.preparation}</li>
            </ul>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        foundCocktail: state.foundCocktail,
    };
};

export default connect(mapStateToProps)(FoundCocktail);