const initialState = {
  king:{
    black:{
      remaining:1,
      1:{
      row:7,
      column:3,
      color: 'black',
      type: 'king'
      }
    },
    white:{
      remaining:1,
      1:{
      row:0,
      column:3,
      color: 'white',
      type: 'king'
      }
    }
  },
  queen:{
    black:{
      remaining:1,
      1:{
      row:7,
      column:4,
      color: 'black',
      type: 'queen'
      }
    },
    white:{
      remaining:1,
      1:{
      row:0,
      column:4,
      color: 'white',
      type: 'queen'
      }
    }
  },
  rook:{
    black:{
      remaining: 2,
      1:{
        row: 7,
        column: 0,
        color: 'black',
        type: 'rook'
      },
      2:{
        row: 7,
        column: 7,
        color: 'black',
        type: 'rook'
      }
    },
    white:{
      remaining: 2,
      1:{
        row: 0,
        column: 0,
        color: 'white',
        type: 'rook'
      },
      2:{
        row: 0,
        column: 7,
        color: 'white',
        type: 'rook'
      }
    }
  },
  bishop:{
    black:{
      remaining: 2,
      1:{
        row: 7,
        column: 1,
        color: 'black',
        type: 'bishop'
      },
      2:{
        row: 7,
        column: 6,
        color: 'black',
        type: 'bishop'
      }
    },
    white:{
      remaining: 2,
      1:{
        row: 0,
        column: 1,
        color: 'white',
        type: 'bishop'
      },
      2:{
        row: 0,
        column: 6,
        color: 'white',
        type: 'bishop'
      }
    }
  },
  knight:{
    black:{
      remaining: 2,
      1:{
        row: 7,
        column: 2,
        color: 'black',
        type: 'knight'
      },
      2:{
        row: 7,
        column: 5,
        color: 'black',
        type: 'knight'
      }
    },
    white:{
      remaining: 2,
      1:{
        row: 0,
        column: 2,
        color: 'white',
        type: 'knight'
      },
      2:{
        row: 0,
        column: 5,
        color: 'white',
        type: 'knight'
      }
    }
  },
  pawn:{
    black:{
      remaining: 8,
      1:{
        row: 6,
        column: 0,
        color:'black',
        type:'pawn'
      },
      2:{
        row: 6,
        column: 1,
        color:'black',
        type:'pawn'
      },
      3:{
        row: 6,
        column: 2,
        color:'black',
        type:'pawn'
      },
      4:{
        row: 6,
        column: 3,
        color:'black',
        type:'pawn'
      },
      5:{
        row: 6,
        column: 4,
        color:'black',
        type:'pawn'
      },
      6:{
        row: 6,
        column: 5,
        color:'black',
        type:'pawn'
      },
      7:{
        row: 6,
        column: 6,
        color:'black',
        type:'pawn'
      },
      8:{
        row: 6,
        column: 7,
        color:'black',
        type:'pawn'
      },
    },
    white:{
      remaining: 8,
      1:{
        row: 1,
        column: 0,
        color:'white',
        type:'pawn'
      },
      2:{
        row: 1,
        column: 1,
        color:'white',
        type:'pawn'
      },
      3:{
        row: 1,
        column: 2,
        color:'white',
        type:'pawn'
      },
      4:{
        row: 1,
        column: 3,
        color:'white',
        type:'pawn'
      },
      5:{
        row: 1,
        column: 4,
        color:'white',
        type:'pawn'
      },
      6:{
        row: 1,
        column: 5,
        color:'white',
        type:'pawn'
      },
      7:{
        row: 1,
        column: 6,
        color:'white',
        type:'pawn'
      },
      8:{
        row: 1,
        column: 7,
        color:'white',
        type:'pawn'
      },
    }
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
