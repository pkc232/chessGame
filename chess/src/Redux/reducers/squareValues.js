const getInitialSquareValues = (row, column) => {
    let mat = new Array(row);
    for(let i = 0; i< column; i++)
      mat[i] = new Array(column);
    for(let i=0;i<row;i++){
      for(let j=0;j<column;j++){
        mat[i][j] = {
          row: i,
          column: j,
          type: 'empty',
          piece: {}
        }
      }
    }
    return mat;
}

const initialState = getInitialSquareValues(8, 8);

const squareValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILL_SQUARE':{
      const valueToFill = action.payload;
      let newState = state;
      const {row, column, piece} = valueToFill;
      newState[row][column] =  {
        ...state[row][column],
        type: 'piece',
        piece: {...piece}
      }
      return newState;
    }
    case 'EMPTY_SQUARE':{
      const valueToEmpty = action.payload;
      let newState = {
        ...state
      };
      const {row, column} = valueToEmpty;
      newState[row][column] =  {
        ...state[row][column],
        type: 'empty',
        piece: {}
      }
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default squareValuesReducer;
