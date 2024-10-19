import { useState } from "react";

// import { MouseEvent } from "react";

interface props {
  items: String[];
  heading: string;
}
function ListGroup({ items, heading }: props) {
  //   let items = ["New York", "Tokiya", "London", "Paris"];
  //   items = [];

  //   let selectIndex = 0;

  const [selectIndex, setSelectedIndex] = useState(-1);

  //   const handleEvent = (event: MouseEvent) => {
  //     console.log(event);
  //   };
  return (
    <>
      <ul className="list-group">
        <h1>{heading}</h1>
        {/* {items.length === 0 ? <p>No Items found</p> : null} */}
        {items.length === 0 && <p>No Items found</p>}
        {items.map((item, index) => (
          <li
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
