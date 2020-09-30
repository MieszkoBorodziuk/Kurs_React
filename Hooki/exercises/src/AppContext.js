import React, { createContext, useState } from 'react';


export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isUserLogged, setIsUserLogged] = useState(false);

    const toggleloggedState = () => setIsUserLogged(prevValue => !prevValue);

    return (
        <AppContext.Provider value={{ isUserLogged, toggleloggedState }}>
            {children}
        </AppContext.Provider>
    )

};

export default AppProvider;