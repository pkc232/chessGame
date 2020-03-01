import { combineReducers } from "redux";
import squareValues from "./squareValues";
import piecePositions from "./piecePositions";
import movePiece  from "./movePiece";

export default combineReducers({piecePositions, squareValues, movePiece});
