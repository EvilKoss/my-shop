import * as actionTypes from "./actiontypes";

export const setProducts = products => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products
  }
};

export const setShopProducts = products => {
  return {
    type: actionTypes.SET_SHOP_PRODUCTS,
    products
  }
};
