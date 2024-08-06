import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeCard from "./components/ThemeCard";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const lightTheme = () =>{
    setThemeMode('light');
  }
  const darkTheme=()=>{
    setThemeMode('dark');
  }

  //actual theme change 
  useEffect(() => {
    
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode)
   }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          {/*theme buttons*/}
          <ThemeButton />
          <div className="w-full max-w-sm mx-auto"></div>
          {/*card buttons*/}
          <ThemeCard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
