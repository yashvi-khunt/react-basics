import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import { Home, About, Contact, User, Github } from "./components";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { githubInfoLoader } from "./components/Github/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
