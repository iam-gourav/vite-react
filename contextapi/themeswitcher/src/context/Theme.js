import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

// we can also declear initial context value

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}

