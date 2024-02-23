import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Dapp from "@/pages/Dapp/Dapp";
import Revshare from "@/pages/Revshare/Revshare";
import DashboardSection from "@/pages/Dapp/sections/DashboardSection";
import ProductSuiteSection from "@/pages/Dapp/sections/ProductSuiteSection";
import StakingSection from "@/pages/Dapp/sections/StakingSection";
import ApiSection from "@/pages/Dapp/sections/ApiSection";
import AffiliateProgramSection from "@/pages/Dapp/sections/AffiliateProgramSection";

import ChatAssistanceSpace from "@/pages/Space/ChatAssitanceSpace/ChatAssistanceSpace";
import ImageGenerationSpace from "@/pages/Space/ImageGenerationSpace/ImageGenerationSpace";
import TokenTopSpace from "@/pages/Space/TokenTopSpace/TokenTopSpace";
import TokenTrendingSpace from "@/pages/Space/TokenTrendingSpace/TokenTrendingSpace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/revshare",
    element: <Revshare />,
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
        path: "products/trade",
        element: <TokenTopSpace />,
      },
      {
        path: "products/trending",
        element: <TokenTrendingSpace />,
      },
      {
        path: "products/ai-assitant",
        element: <ChatAssistanceSpace />,
      },
      {
        path: "products/image-generation",
        element: <ImageGenerationSpace />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
