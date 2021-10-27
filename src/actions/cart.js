import { ADD_NEW_PRODUCT, REMOVE_NEW_PRODUCT } from ".";

export function addNewProduct(product) {
  return {
    type: ADD_NEW_PRODUCT,
    payload: product,
  };
}

export function removeProduct() {
  return {
    type: REMOVE_NEW_PRODUCT,
  };
}
