import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import ingredientsReducer from "../Reducers/ingredientsReducer"
import thunk from "redux-thunk"
import { initialState } from "./InitialState"
import cocktailsSearchReducer from "../Reducers/cocktailsSearchReducer"

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  cocktailsList: cocktailsSearchReducer,
})

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
