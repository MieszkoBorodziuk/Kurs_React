import React from 'react';
import { createRef } from 'react';
import { PureComponent} from 'react';

class Counter extends PureComponent {
    state = {
        counter: 0,
    }

    comonentRef = createRef();

    render() {

        const { counter } = this.state;
        return (
            <div ref={this.comonentRef}>
                <p>Wartość licznika wynosi: {counter}</p>

                <button onClick={this.asyncIncreaseCounterValue}>Zwiększ wartosc asyn</button>
            </div>
        );
    }

    asyncIncreaseCounterValue = () => setTimeout(() => { if(this.comonentRef.current) {
         this.setState(prevState => ({ counter: prevState.counter + 1 })) }}, 3000);
}

export default Counter;