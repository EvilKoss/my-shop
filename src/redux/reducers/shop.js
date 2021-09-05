import * as actionTypes from "../actions/actiontypes";

const initialState = { products: [] };

export default function cart(state = initialState, action) {
  switch (action.type) {

    case actionTypes.SET_SHOP_PRODUCTS: {
      const newProducts = action.products;
      return { ...state, products: newProducts };
    }


    default:
      return { ...state };
  }
}
