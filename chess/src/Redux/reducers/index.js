import { combineReducers } from "redux";
import squareValues from "./squareValues";
import piecePositions from "./piecePositions";

export default combineReducers({ piecePositions, squareValues });
