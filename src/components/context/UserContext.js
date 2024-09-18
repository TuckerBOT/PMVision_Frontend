import React, { createContext, useState, useEffect } from "react";
import { API_URL } from "../globalVariables/GlobalVariables";

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [user, setUser] = useState(null);

  // fetch a user from backend API
  useEffect(() => {
    const fetchUser = () => {
        fetch(API_URL + 'Users', {
          method: 'GET',
          credentials: 'include',
          mode: 'cors'
        })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(error => console.log(error))
    };
    fetchUser();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };