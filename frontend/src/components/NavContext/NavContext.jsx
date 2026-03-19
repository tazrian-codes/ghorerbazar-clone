import { createContext, useState } from "react";


export const NavContext = createContext();
const NavProvider = ({children}) => {
  const [sideBar, setSideBar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
      <NavContext.Provider
        value={{
          sideBar,
          setSideBar,
          isLoggedIn,
          setIsLoggedIn
        }}
        >
          {children}
        </NavContext.Provider>
    );
};

export default NavProvider;