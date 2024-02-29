import { useParams } from "react-router-dom";

export default function User() {
  const { user_id } = useParams();
  return <div>User: {Number(user_id)}</div>;
}
