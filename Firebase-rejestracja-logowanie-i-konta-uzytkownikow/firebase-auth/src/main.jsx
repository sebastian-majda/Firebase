import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./shared/Layout";

const path = import.meta.env.VITE_APP_APP_PATH;

const App = path
    ? React.lazy(() => import(`./exercises/${path}/App.jsx`))
    : React.lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
