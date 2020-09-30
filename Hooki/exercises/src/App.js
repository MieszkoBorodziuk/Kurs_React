import React, { useState } from 'react';
import { AppContext, defaultObject } from './AppContext';
import Button from './Button';

import UserInfo from './UserInfo';

const App = () => {
    const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);


    // state = {
    //     isUserLogged: defaultObject.isUserLogged,
    // }
    const toggleloggedState = () => setIsUserLogged(prevValue => !prevValue);

    return (
        <div>
            <AppContext.Provider value={{ isUserLogged, toggleloggedState }}>
                <UserInfo />
                <Button />
            </AppContext.Provider>
        </div>
    );
}

// handleToggleStateISLogged = () =>
//     this.setState(prevState => ({
//         isUserLogged: !prevState.isUserLogged
//     }));


export default App;