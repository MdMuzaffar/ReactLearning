import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
function App() {
  let items = ["New York", "Tokiya", "London", "Paris"];

  const [alertVisible, setAlertvisible] = useState(false);

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
      {alertVisible && <Alert></Alert>}
      <Button onClick={() => setAlertvisible(true)}> My Button </Button>
    </div>
  );
}

export default App;
