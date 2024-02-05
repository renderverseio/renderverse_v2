import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Spaces from "@/pages/Spaces/Spaces";
import SpaceFactory from "@/pages/Space/SpacesFactory";
import Models from "@/pages/Models/Models";
import Model from "@/pages/Model/Model";
import Dapp from "@/pages/Dapp/Dapp";
import AffiliateProgramSection from "@/pages/Dapp/sections/AffiliateProgramSection";
import ConversationsSection from "@/pages/Dapp/sections/ConversationSection";
import StakingSection from "@/pages/Dapp/sections/StakingSection";
import DocsSection from "@/pages/Dapp/sections/DocsSection";
import MyAigentsSection from "@/pages/Dapp/sections/MyAigentsSection";
import ProductSuiteSection from "@/pages/Dapp/sections/ProductSuiteSection";
import DashboardSection from "@/pages/Dapp/sections/DashboardSection";


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
  },
  {
    path: "/dapp",
    element: <Dapp />,
    children: [
      {
        index: true,
        path: 'affiliate',
        element: <AffiliateProgramSection />,
      },
      {
        path: 'conversations',
        element: <ConversationsSection />,
      },
      {
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
        path: 'myaigents',
        element: <MyAigentsSection />,
      },
      {
        path: 'products',
        element: <ProductSuiteSection />,
      },
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
