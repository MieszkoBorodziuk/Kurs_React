import React from 'react';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const UserInfo = () => {
    const { isUserLogged } = useContext(AppContext);
    // optymalizacja
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



export default UserInfo;