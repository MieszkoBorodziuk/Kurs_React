import React from 'react';
import { PureComponent } from 'react';


import { AppContext } from './AppContext';

class UserInfo extends PureComponent {
    // optymalizacja
    static contextType = AppContext;

    render() {
        const { isUserLogged} = this.context;
        const userLoggedInfo = isUserLogged ? 'zalogowany' : 'niezalogowany';
        return (
            <div>

                <p>Uzytownik jest  {userLoggedInfo}</p>
            </div>

        );
    }
    // render() {
    //     return (
    //         <AppContext.Consumer>
    //             {
    //                 ({isUserLogged}) => (
    //                     <div>

    //                         <p>Uzytownik jest  {isUserLogged ? 'zalogowany' : 'niezalogowany'}</p>
    //                     </div>
    //                 )
    //             }

    //         </AppContext.Consumer>
    //     );
    // }

}

export default UserInfo;