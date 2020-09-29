import React, { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0);

  const handler = () => setCounter(counter + 1);

  return (
    <div>
      <h1 onClick={handler}>Hello</h1>
      <p>{counter}</p>
      <p></p>
    </div>
  );
}

export default App;
