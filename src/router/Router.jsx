import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Apploader from "@/components/common/Apploader/Apploader";

const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const component = await import("@/pages/Home/Home");
      return { Component: component.default };
    },
  },
  {
    path: "/stake",
    async lazy() {
      const component = await import("@/pages/Dapp/sections/StakeSection");
      return { Component: component.default };
    },
  },
  {
    path: "/revshare",
    async lazy() {
      const component = await import("@/pages/Revshare/Revshare");
      return { Component: component.default };
    },
  },
  {
    path: "/dapp",
    async lazy() {
      const component = await import("@/pages/Dapp/Dapp");
      return { Component: component.default };
    },
    children: [
      {
        index: true,
        path: "dashboard",
        async lazy() {
          const component = await import(
            "@/pages/Dapp/sections/DashboardSection"
          );
          return { Component: component.default };
        },
      },

      {
        path: "api",
        async lazy() {
          const component = await import("@/pages/Dapp/sections/ApiSection");
          return { Component: component.default };
        },
      },
      {
        path: "products",
        async lazy() {
          const component = await import(
            "@/pages/Dapp/sections/ProductSuiteSection"
          );
          return { Component: component.default };
        },
      },
      {
        path: "affiliate",
        async lazy() {
          const component = await import(
            "@/pages/Dapp/sections/AffiliateProgramSection"
          );
          return { Component: component.default };
        },
      },
      {
        path: "staking",
        async lazy() {
          const component = await import(
            "@/pages/Dapp/sections/StakingSection"
          );
          return { Component: component.default };
        },
      },

      {
        path: "products/trade",
        async lazy() {
          const component = await import(
            "@/pages/Space/TokenTopSpace/TokenTopSpace"
          );
          return { Component: component.default };
        },
      },
      {
        path: "products/trending",
        async lazy() {
          const component = await import(
            "@/pages/Space/TokenTrendingSpace/TokenTrendingSpace"
          );
          return { Component: component.default };
        },
      },
      {
        path: "products/ai-assitant",
        async lazy() {
          const component = await import(
            "@/pages/Space/ChatAssitanceSpace/ChatAssistanceSpace"
          );
          return { Component: component.default };
        },
      },
      {
        path: "products/image-generation",
        async lazy() {
          const component = await import(
            "@/pages/Space/ImageGenerationSpace/ImageGenerationSpace"
          );
          return { Component: component.default };
        },
      },
    ],
  },
]);

export default function Router() {
  return (
    <Suspense fallback={<Apploader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
