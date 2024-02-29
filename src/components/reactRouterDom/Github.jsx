import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch("https://api.github.com/users/benjaminhpham")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  const data = useLoaderData();

  return (
    <div>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/benjaminhpham");
  return res.json();
};
