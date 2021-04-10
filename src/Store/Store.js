import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { initialState } from "./InitialState";
import cocktailsSearchReducer from "../Reducers/cocktailsSearchReducer";

const rootReducer = combineReducers({
  cocktails: cocktailsSearchReducer
});

const store = createStore(
    cocktailsSearchReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store
