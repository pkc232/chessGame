

const initialState = 'ALL';

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
