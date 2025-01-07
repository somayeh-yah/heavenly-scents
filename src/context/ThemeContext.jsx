import { createContext, useEffect} from "react";
import useLocalStorage from "use-local-storage";
const ThemeContext = createContext();

function DarkModeProvider(props){
    const [isDark, setIsDark] = useLocalStorage("isDark", false);
   
    const toggleDarkMode = () => {
      setIsDark(!isDark);
    }

    useEffect(() => {
        document.body.setAttribute("data-theme", isDark ? "dark" : "light");
      }, [isDark]);
    return(
        <div>
            <ThemeContext.Provider value={{isDark, toggleDarkMode}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
};

export {ThemeContext, DarkModeProvider}