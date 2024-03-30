const initialState = {
  cart: {},
  products: 0,
  totalPrice: 0,
};
const cartReducer = (state = initialState, action) => {
  if (action.type == "INC") {
    state.products += 1;
    state.totalPrice += action.payload.price;
    let productId = action.payload.id;
    let currentCount = state.cart[productId];
    state.cart[productId] = 1 + (currentCount ? currentCount : 0);
    return { ...state };
  } else if (action.type == "DEC") {
    state.products -= 1;
    state.totalPrice -= action.payload.price;
    let productId = action.payload.id;
    let currentCount = state.cart[productId];
    if (currentCount == 0) {
      delete state.cart[productId];
    } else {
      state.cart[productId] -= 1;
    }

    return { ...state };
  }
  return state;
};
export default cartReducer;
console.log(initialState);
