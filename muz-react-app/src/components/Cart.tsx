import MenuItem from "./MenuItem";

const Cart = () => {
  return (
    <>
      <h1>Cart</h1>
      <MenuItem item={{ name: " Biryani", quantity: 2 }} />
      <MenuItem item={{ name: " Qubani", quantity: 2 }} />
    </>
  );
};

export default Cart;
