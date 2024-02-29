import { useContext } from "react";
import UserContext from "./context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  if (!user || !user?.username || !user?.password)
    return <h1>Not Logged In</h1>;

  return <div>Profile: {user.username}</div>;
}
