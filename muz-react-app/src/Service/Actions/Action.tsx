import React from "react";

const addToCart = (data) => {
  return {
    item: "ADD_TO_CART",
    data: data,
  };
};

export default addToCart;
