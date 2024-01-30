import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Spaces from "@/pages/Spaces/Spaces";
import SpaceFactory from "@/pages/Space/SpacesFactory";
import Models from "@/pages/Models/Models";
import Model from "@/pages/Model/Model";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/spaces",
    element: <Spaces />,
  },
  {
    path: "/spaces/:space",
    element: <SpaceFactory />,
  },
  {
    path: "/models",
    element: <Models />
  },
  {
    path: "/models/:model",
    element: <Model />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
