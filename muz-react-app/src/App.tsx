import { useState, useEffect, useRef } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import GitHubUser from "./components/GitHubUser";
// import React, { useState, useEffect, useRef } from 'react';

// function GitHubUser({ title, name }: any) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{title}</h1>
//     </div>
//   );
// }

function App() {
  let items = ["New York", "Tokiya", "London", "Paris"];

  const [alertVisible, setAlertvisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  const handleSelectItem = (item: String) => {
    console.log(item);
  };

  const [data, setData] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then(setData);
    // console.log(data);
  });
  if (data)
    return (
      <div>
        <div>
          <GitHubUser name={data} title={data} />
        </div>

        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
        {alertVisible && <Alert onClose={() => setAlertvisible(false)}></Alert>}
        <Button onClick={() => setAlertvisible(true)}> My Button </Button>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1>Render Count: {renderCount.current}</h1>
        </div>
      </div>
    );
}

export default App;
