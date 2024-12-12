// import { useState, useEffect, useRef } from "react";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/alert";
// import GitHubUser from "./components/GitHubUser";
// import React, { useState, useEffect, useRef } from "react";

import Button from "./components/Button";
import Cart from "./components/Cart";

function App() {
  //   return (
  //     <div>
  //       <h1>{name}</h1>
  //       <h1>{title}</h1>
  //     </div>
  //   );
  // }

  // function App() {
  //   let items = ["New York", "Tokiya", "London", "Paris"];

  //   const [alertVisible, setAlertvisible] = useState(false);
  //   const [inputValue, setInputValue] = useState("");
  //   const renderCount = useRef(0);

  // useEffect(() => {
  //   renderCount.current += 1;
  // });

  // const handleSelectItem = (item: String) => {
  //   console.log(item);
  // };

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/moonhighway`)
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);
  // if (data)
  return (
    // <div>
    //   <div>
    //     <GitHubUser
    //       name={data?.name}
    //       location={data?.location}
    //       avatar={data?.avatar_url}
    //       createdDate={data?.created_at}
    //       updatedDate={data?.updated_at}
    //       bio={data?.bio}
    //     />
    //   </div>

    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    //   {alertVisible && <Alert onClose={() => setAlertvisible(false)}></Alert>}
    //   <Button onClick={() => setAlertvisible(true)}> My Button </Button>
    //   <div>
    //     <input
    //       type="text"
    //       value={inputValue}
    //       onChange={(e) => setInputValue(e.target.value)}
    //     />
    //     <h1>Render Count: {renderCount.current}</h1>
    //   </div>
    // </div>
    <>
      <h1>Hello React Testing</h1>
      {/* <Button /> */}
      <Button text="Home" />
      <Button text="About Us" />
      {/* <Button /> */}
      <Cart />
    </>
  );
}

export default App;
