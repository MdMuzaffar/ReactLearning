import { useState } from "react";

const Counter = () => {
  //   let counterValue = 0;

  const [counterValue, setCounterValue] = useState(2);

  const increament = () => {
    setCounterValue(counterValue + 1);
  };
  return (
    <section>
      <h2> Count is</h2>
      <p> {counterValue} </p>
      <div>
        <button onClick={increament}> + Increament </button>
        <button> - Decrement </button>
      </div>
      <div>
        <button>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
