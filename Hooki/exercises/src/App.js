import React, { PureComponent } from 'react';
import { AppContext, defaultObject } from './AppContext';
import Button from './Button';

import UserInfo from './UserInfo';

class App extends PureComponent {
    state = {
        isUserLogged: defaultObject.isUserLogged,
    }

    render() {
        return (
            <div>
                <AppContext.Provider value={{
                    isUserLogged: this.state.isUserLogged,
                    toggleloggedState: this.handleToggleStateISLogged
                }}>
                    <UserInfo />
                    <Button/>
                </AppContext.Provider>
            </div>
        );
    }
    handleToggleStateISLogged = () => 
    this.setState(prevState => ({
        isUserLogged: !prevState.isUserLogged
      }));
 
}

export default App;