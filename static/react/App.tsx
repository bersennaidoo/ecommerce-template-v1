//import { CartProvider } from "react-use-cart";
//import { Auth0Provider } from "@auth0/auth0-react";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import RootLayout from "./RootLayout";

/*const routeradmin = createBrowserRouter([
  {
    path: "/shop",
    element: <RootLayout />,
    errorElement: <ErrorScript />,
    children: [
      { index: true, element: <HomeScript /> },
      { path: "login-admin", element: <LoginButton /> },
      { path: "logout-admin", element: <LogoutButton /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          { index: true, element: <EventsScript />, loader: eventsLoader },

          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailScriptWithAuth />,
                action: deleteEventAction,
              },

              {
                path: "edit",
                element: <EditEventScriptWithAuth />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventScriptWithAuth />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);*/

/*const routerproducts = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorScript />,
    children: [
      { index: true, element: <ShopPage /> },
      { path: "login-products", element: <LoginButtonProducts /> },
      { path: "logout-products", element: <LogoutButtonProducts /> },
      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          { index: true, element: <ProductsScript />, loader: productsLoader },
          {
            path: ":id",
            id: "product-detail",
            loader: productDetailLoader,
            children: [
              {
                index: true,
                element: <ProductDetailScript />,
              },
            ],
          },
        ],
      },
    ],
  },
]);*/

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return (
    <div>Hello world</div>
  );
}

export default App;
