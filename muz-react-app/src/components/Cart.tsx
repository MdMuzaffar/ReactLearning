import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Cart = () => {
  const [firstItem, setFirstItem] = useState({
    name: "Biryani",
    quantity: 2,
  });
  useEffect(() => {
    setTimeout(() => {
      setFirstItem((item) => {
        return {
          ...item,
          quantity: 10,
        };
      });
    }, 1000);
  });
  return (
    <>
      <h1>Cart</h1>
      <MenuItem item={firstItem} />
      <MenuItem item={{ name: " Qubani", quantity: 2 }} />
      <MenuItem item={{ name: " Salad", quantity: 1 }} />
    </>
  );
};

export default Cart;
