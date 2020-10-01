import React, { useState, useMemo } from 'react';
import CounterUseMemo from './CounterUseMemo';


const useCallBackExample = () => {
    const [state, setState] = useState({x: 0, y: 0 });
    const [firstCounter, setFirstCounter] = useState(0);
    const [secoundCounter, setSecoundCounter] = useState(0);

    const increaseX = () => setState({ ...state, x: state.x + 1 });
    const increaseY = () => setState({ ...state, y: state.y + 1 });


    const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);
    const increaseSecoundCounter = () => setSecoundCounter(secoundCounter + 1);

    const firstCounterComponent = useMemo(() => <CounterUseMemo counter={firstCounter} index={1} />, [firstCounter])


    return (
        <div>
            <p>Licznik nr 1, wnosi: {state.x}</p>
            <p>Licznik nr 2, wnosi: {state.y}</p>
            {/* {firstCounterComponent} */}
            <CounterUseMemo counter={state.x} index={1} />
            <CounterUseMemo counter={state.y} index={2} />

            <button onClick={increaseX}>Zwieksz licznik 1</button>
            <button onClick={increaseY}>Zwieksz licznik 2</button>


        </div>
    );
}

export default useCallBackExample;