import { combineReducers } from "redux";
import squareValuesReducer from "./squareValues";
import piecePositions from "./piecePositions";

export default combineReducers({piecePositions, squareValuesReducer});
