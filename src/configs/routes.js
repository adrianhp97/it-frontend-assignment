/** Components */
import Layout from "components/layout";

/** Utils */
import { createBrowserRouter } from "react-router-dom";
import rootLoader from "components/layout/loader";

/** Views */
import Home from "views/home";
import Error from "views/error";

const routes = [
  {
    element: <Home />,
    path: "",
  },
];

export default createBrowserRouter([
  {
    children: routes,
    element: <Layout />,
    errorElement: <Error />,
    loader: rootLoader,
    path: "/",
  },
]);
