/** Components */
import Layout from "components/layout";

/** Views */
import Home from "views/home";
import Error from "views/error";

/** Utils */
import { createBrowserRouter } from "react-router-dom";

const loader = async () => {
  return {};
}

const routes = [
  {
    path: "",
    element: <Home />,
  },
];

export default createBrowserRouter([
  {
    children: routes,
    element: <Layout />,
    errorElement: <Error />,
    loader: loader,
    path: "/",
  },
]);
