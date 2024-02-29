import Login from "./components/contextApi/Login";
import Profile from "./components/contextApi/Profile";
import UserContextProvider from "./components/contextApi/context/UserContextProvider";

export default function App() {
  return (
    <UserContextProvider>
      <h1>React Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
