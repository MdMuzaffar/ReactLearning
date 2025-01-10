import React from "react";

import { ADD_TO_CART } from "../constansts";

export const addToCart = (data: any) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};
