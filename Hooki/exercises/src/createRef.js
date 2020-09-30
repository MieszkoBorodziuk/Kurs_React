import React, { createRef, PureComponent } from 'react';
import Counter from './counter';

class CreateRef extends PureComponent {
    state = {
        isCounterVisible: true,
    }
    textInput = createRef();
    render() {
        const counterElement = this.state.isCounterVisible ? <Counter/> : null
        return (
            <div>
                <input ref={this.textInput} type="text"></input>
                <input  type="text"></input>
                <button onClick={this.focusTextInput}>Ustaw focus na input</button>
                <button onClick={this.toggleVisibilityCounter}>Ukryj/odkryj counter</button>
                {counterElement}
            </div>
        )
    }
    toggleVisibilityCounter = () => this.setState(prevState => ({
        isCounterVisible: !prevState.isCounterVisible
    }))
    focusTextInput = () => this.textInput.current.focus();
}

export default CreateRef;