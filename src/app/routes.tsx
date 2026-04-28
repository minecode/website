import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Court360 } from "./pages/Court360";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/court360",
    Component: Court360,
  },
]);
