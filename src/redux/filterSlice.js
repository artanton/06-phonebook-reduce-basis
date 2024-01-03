const inintialState = {
  filter: '',
};

export const filtering = value => {
  return {
    type: 'filter/filtering',
    payload: value,
  };
};

export const filterReducer = (state = inintialState, action) => {
  switch (action.type) {
    case 'filter/filtering':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
