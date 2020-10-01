import React, { useRef } from 'react';


const UseRef = () => {
    const textInputRef = useRef();

    const focusOnInput = () => textInputRef.current.focus();

    return (
        <div>
            <input ref={textInputRef} type="text" />
            

            <button onClick={focusOnInput}>Ustaw focus</button>
        </div>
    )
}

export default UseRef;