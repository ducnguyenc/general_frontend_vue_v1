import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios';

export const UserContext = createContext();

export default function UserProviderContext({ children }) {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
