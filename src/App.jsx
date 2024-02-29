import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeToggler from "./components/ThemeToggler";
import Login from "./components/contextApi/Login";
import Profile from "./components/contextApi/Profile";
import UserContextProvider from "./components/contextApi/context/UserContextProvider";
import { ThemeProvider } from "./components/contextApi/context/theme";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    // <UserContextProvider>
    //   <h1>React Context API</h1>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ThemeToggler />
      <Card />
    </ThemeProvider>
  );
}
