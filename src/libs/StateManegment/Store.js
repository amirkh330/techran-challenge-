import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { DataReducer } from "./DataReducer";

const store=createStore(DataReducer,composeWithDevTools(
    applyMiddleware(thunk)));

// const store = createStore(DataReducer);

export default store;
