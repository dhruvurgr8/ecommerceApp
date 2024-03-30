const initialState = {
  products: null,
  filter: null,
};

const reducer = (state = initialState, action) => {
  if (action.type == "FETCH_DATA") {
    return { ...state, products: action.payload };
  } else if (action.type == "FILTER") {
    return { ...state, filter: action.payload };
  }
  return state;
};
export default reducer;
