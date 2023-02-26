import { combineReducers } from "redux";

import UrlReducer from "./url/reducer";

// Combine all reducer
const rootReducer = combineReducers({
    UrlReducer
});

export default rootReducer;