import { FC } from "react";

type Product = {
  item: {
    name: string;
    quantity: number;
  };
};

const MenuItem: FC<Product> = ({ item }) => {
  return (
    <li>
      <h2>{item.name}</h2>
      <span>{item.quantity}</span>
    </li>
  );
};

export default MenuItem;
