import React from 'react';

const CounterUseMEmo = ({counter, index}) => {
    console.log(`render licznik nr ${index}`);
    return ( 
        <div>
            licznik nr {index} wynosi: {counter.x}
        </div>
     );
}
 
// export default React.memo(CounterUseMEmo);
export default React.memo(CounterUseMEmo);