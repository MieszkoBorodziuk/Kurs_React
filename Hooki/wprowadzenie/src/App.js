import React, { useEffect, useState } from 'react';


function App() {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter(counter + 1);
  const toggleVisibilityCounter = () => setIsActive(precValue => !precValue);

  const counterComponent = isActive
    ? <Counter rerenderCounter={counter} /> : null;

  // useEffect(() => {
  //    alert('hello')
  // }, [])

  return (
    <div>

      <button onClick={toggleVisibilityCounter}>Pokaz/ukryj</button>
      <button onClick={handler}> rerender</button>
      {counterComponent}
    </div>
  );
}

const Counter = ({ rerenderCounter }) => {
  const [counter, setCounter] = useState(0);

  const handleMauseMove = event => setCounter(event.clientX);

  useEffect(() => {
    window.addEventListener('mousemove', handleMauseMove);

    return () => {
      alert('odmontowane')
      window.removeEventListener('mousemove', handleMauseMove);
    }
  }, [rerenderCounter]);
  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  )
}

export default App;
