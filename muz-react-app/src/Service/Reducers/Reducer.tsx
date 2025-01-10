import { ADD_TO_CART } from "../constansts";

const initialState = {
  cartData: [],
};

export default function cartItems(state = initialState, Action: any) {
  switch (Action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: Action.data,
      };
      break;
    default:
      return state;
  }
}
