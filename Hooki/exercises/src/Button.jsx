import React from 'react';
import { PureComponent } from 'react';
import { AppContext } from './AppContext';

class Button extends PureComponent {
    // optymalizacja
    static contextType = AppContext;
    render() {
        return (



            <button onClick={this.context.toggleloggedState}>Przelacz</button>
        

        );
    }
    // render() {
    //     return (
    //         <AppContext.Consumer>
    //             {
    //                 ({toggleloggedState}) => (
                       
    //                         <button onClick={toggleloggedState}>Przelacz</button>
    //                     )
    //             }
    //         </AppContext.Consumer>

    //     );
    // }

}

export default Button;