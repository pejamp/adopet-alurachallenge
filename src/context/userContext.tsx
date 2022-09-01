import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext({} as any);

export const UserProvider = (props: any) => {
  const [dataForm] = useLocalStorage('userFormData', '');
  const [userData, setUserData] = useState();

  useEffect(() => {

  }, [dataForm]);

  return (
    <UserContext.Provider value={{userData, setUserData}}>
      {props.children}
    </UserContext.Provider>
  );
}

export const useAuth = () => useContext(UserContext);