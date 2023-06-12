import { useContext, useState, createContext } from "react";

export const UserContext = createContext();
export const UserContextUpdate = createContext();

export const User = () => {
  return useContext(UserContext);
};

export const UpdateUser = () => {
  return useContext(UserContextUpdate);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const UserLogged = (user) => {
    setUser(user);
  };

  return (
    <UserContext.Provider value={user}>
      <UserContextUpdate.Provider value={UserLogged}>
        {children}
      </UserContextUpdate.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
