import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Dapp from "@/pages/Dapp/Dapp";
import StakingSection from "@/pages/Dapp/sections/StakingSection";
import DocsSection from "@/pages/Dapp/sections/DocsSection";
import ProductSuiteSection from "@/pages/Dapp/sections/ProductSuiteSection";
import DashboardSection from "@/pages/Dapp/sections/DashboardSection";
import ImageGenerationSpace from "@/pages/Space/ImageGenerationSpace/ImageGenerationSpace";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dapp",
    element: <Dapp />,
    children: [
      {
        index: true,
        path: 'staking',
        element: <StakingSection />,
      },
      {
        path: 'docs',
        element: <DocsSection />,
      },
      {
        path: 'dashboard',
        element: <DashboardSection />,
      },
      {
        path: 'products',
        element: <ProductSuiteSection />,
      },
      {
        path: "image-generation",
        element: <ImageGenerationSpace />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
