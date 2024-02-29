import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Layout,
  Home,
  About,
  Contact,
  User,
  Github,
} from "./components/reactRouterDom";

import { githubInfoLoader } from "./components/reactRouterDom/Github.jsx";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

// const MyApp = () => {
//   return (
//     <div>
//       <h1></h1>
//     </div>
//   );
// };

// const AnotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );

// const areactElement = React.createElement(
//   "a",
//   { href: "https://www.google.com", target: "_blank" },
//   "Click to visit Google"
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":user_id" element={<User />} />
      </Route>
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <RouterProvider router={router} />
  <App />
);
