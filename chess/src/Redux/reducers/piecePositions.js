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
    black:{
      remaining: 2,
      1:{
        row: 7,
        column: 0
      },
      2:{
        row: 7,
        column: 7
      }
    },
    white:{
      remaining: 2,
      1:{
        row: 0,
        column: 0
      },
      2:{
        row: 0,
        column: 7
      }
    }
  },
  bishop:{
    black:{
      remaining: 2,
      1:{
        row: 7,
        column: 1
      },
      2:{
        row: 7,
        column: 6
      }
    },
    white:{
      remaining: 2,
      1:{
        row: 0,
        column: 1
      },
      2:{
        row: 0,
        column: 6
      }
    }
  },
  knight:{
    black:{
      remaining: 2,
      1:{
        row: 7,
        column: 2
      },
      2:{
        row: 7,
        column: 5
      }
    },
    white:{
      remaining: 2,
      1:{
        row: 0,
        column: 2
      },
      2:{
        row: 0,
        column: 5
      }
    }
  },
  pawn:{
    black:{
      remaining: 8,
      1:{
        row: 6,
        column: 0
      },
      2:{
        row: 6,
        column: 1
      },
      3:{
        row: 6,
        column: 2
      },
      4:{
        row: 6,
        column: 3
      },
      5:{
        row: 6,
        column: 4
      },
      6:{
        row: 6,
        column: 5
      },
      7:{
        row: 6,
        column: 6
      },
      8:{
        row: 6,
        column: 7
      },
    },
    white:{
      remaining: 8,
      1:{
        row: 0,
        column: 0
      },
      2:{
        row: 0,
        column: 1
      },
      3:{
        row: 0,
        column: 2
      },
      4:{
        row: 0,
        column: 3
      },
      5:{
        row: 0,
        column: 4
      },
      6:{
        row: 0,
        column: 5
      },
      7:{
        row: 0,
        column: 6
      },
      8:{
        row: 0,
        column: 7
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
