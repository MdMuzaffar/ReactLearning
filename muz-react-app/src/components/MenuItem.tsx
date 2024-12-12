const Pro = {
  item: {
    name: String,
    quantity: Number,
  },
};

const MenuItem = (props: Pro) => {
  return (
    <li>
      <h2>{props.item.name}</h2>
      <span>{props.item.quantity}</span>
    </li>
  );
};

export default MenuItem;
