import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Dapp from "@/pages/Dapp/Dapp";
import StakingSection from "@/pages/Dapp/sections/StakingSection";
import DocsSection from "@/pages/Dapp/sections/DocsSection";
import ProductSuiteSection from "@/pages/Dapp/sections/ProductSuiteSection";
import DashboardSection from "@/pages/Dapp/sections/DashboardSection";
import ImageGenerationSpace from "@/pages/Space/ImageGenerationSpace/ImageGenerationSpace";
import ApiSection from "@/pages/Dapp/sections/ApiSection";
import AffiliateProgramSection from "@/pages/Dapp/sections/AffiliateProgramSection";

import KtGrid from "@/pages/KT/KtGrid";
import KtFlex from "@/pages/KT/KtFlex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/grid",
    element: <Home />,
  },
  {
    path: "/flex",
    element: <Home />,
  },
  {
    path: "/dapp",
    element: <Dapp />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <DashboardSection />,
      },
      {
        path: "api",
        element: <ApiSection />,
      },
      {
        path: "products",
        element: <ProductSuiteSection />,
      },
      {
        path: "affiliate",
        element: <AffiliateProgramSection />,
      },
      {
        path: "staking",
        element: <StakingSection />,
      },
      {
        path: "docs",
        element: <DocsSection />,
      },
      {
        path: "image-generation",
        element: <ImageGenerationSpace />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

// image gen ai url
// logo
// links
