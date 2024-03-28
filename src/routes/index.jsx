import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const Router = () => {
  return <RouterProvider router={routers} />;
};

export default Router;
