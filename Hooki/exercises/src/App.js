import React from 'react';
import AppProvider from './AppContext';
import Button from './Button';
import UserInfo from './UserInfo';

const App = () => {
   


    // state = {
    //     isUserLogged: defaultObject.isUserLogged,
    // }
    
    return (
        <div>
            <AppProvider>
                <UserInfo />
                <Button />
            </AppProvider>
        </div>
    );
}

// handleToggleStateISLogged = () =>
//     this.setState(prevState => ({
//         isUserLogged: !prevState.isUserLogged
//     }));


export default App;