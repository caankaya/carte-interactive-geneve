import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./components/App/App";
import Layout from "./components/Layout/Layout";
import store from "./redux/store";
import Detail from "./components/Detail/Detail";
import Admin from "./components/Admin/Admin";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route>
        <Route path="/" element={<Layout />} errorElement={""}>
          <Route index element={<App />} />
          <Route path="/page/:id" element={<Detail />} />
        </Route>
      </Route>
      <Route path="/admin" element={<Admin />} />
    </React.Fragment>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
