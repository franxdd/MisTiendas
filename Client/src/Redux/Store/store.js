import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootRouter from "../Reducer/reducer";

const store = createStore(
  rootRouter,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
