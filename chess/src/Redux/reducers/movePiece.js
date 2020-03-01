export default function(state ={}, action){
    switch(action.type){
        case 'SET_MOVING_PIECE_INITIAL':{
            return {
                piece: action.payload.piece,
                position: action.payload.position
            };
        }
        case 'CLEAR_MOVING_PIECE':{
            return {};
        }
        default:
            return state;
    }
}