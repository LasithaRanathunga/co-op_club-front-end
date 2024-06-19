import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./signin/SignIn";
import Main from "./main/Main";
import Orders from "./main/order/Orders";
import NewOrder from "./main/newOrder/NewOrder";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/pending",
          element: <Orders />,
        },
        { path: "/received", element: <Orders /> },
        { path: "/newOrder", element: <NewOrder /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
