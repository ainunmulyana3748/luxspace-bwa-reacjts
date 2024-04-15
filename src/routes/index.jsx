import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
import Congratulation from "../pages/Congratulation";
import PageNotFound from "../pages/PageNotFound";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories/:idc/products/:idp",
    element: <Details />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/congratulation",
    element: <Congratulation />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={routers} />;
};

export default Router;
