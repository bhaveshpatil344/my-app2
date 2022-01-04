import { useState } from "react";

export default function App() {
  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}

function MyComponent() {
  let [counter, abc] = useState(100);

  const increment = () => {
    counter = counter + 1;
    abc(counter);
  };
  return (
    <div>
      <h1>Counter Application</h1>
      <input type="button" value="Click Meee" onClick={increment} />
      <div>Like {counter}</div>
    </div>
  );
}
