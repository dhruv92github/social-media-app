import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import posts from "./posts";
import postDetails from "./postDetails";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    posts,
    postDetails
  });
export default rootReducer;
