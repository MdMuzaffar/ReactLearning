import { useState, useEffect, useRef } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
// import React, { useState, useEffect, useRef } from 'react';

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
  return (
    <div>
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
