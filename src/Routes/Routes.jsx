import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import WishList from "../pages/WishList/WishList";
import LoadingSpinner from "../pages/LoadingSpinner";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        path: "/home",
        Component: Home,
        loader: () => fetch("/productData.json").then((res) => res.json()),
      },
      {
        path: "/products",
        element: <Products />,
        loader: async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return null;
        },
      },
        {
            path: "/products/:bookId",
            element: <ProductDetails />
        },
      {
        path: "/wishlist",
        element: <WishList />,
      },
    ],
  },
]);
