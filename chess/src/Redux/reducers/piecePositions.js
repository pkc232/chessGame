const initialState = {
  king:{
    black:{
      remaining:1,
      1:{
      row:7,
      column:4
      }
    },
    white:{
      remaining:1,
      1:{
      row:0,
      column:4
      }
    }
  },
  queen:{
    black:{
      remaining:1,
      1:{
      row:7,
      column:4
      }
    },
    white:{
      remaining:1,
      1:{
      row:0,
      column:3
      }
    }
  },
  rook:{

  },
  bishop:{

  },
  knight:{

  },
  pawn:{

  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
