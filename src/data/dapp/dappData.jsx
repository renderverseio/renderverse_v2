import { CiBank, CiServer, CiStar, CiGrid41, CiDollar, CiLink } from "react-icons/ci";

import AImage from '@/assets/stakin/1.png'
import BImage from '@/assets/stakin/2.png'
import CImage from '@/assets/stakin/3.png'

export const dAppHeaders = [
  {
    title: "Dashboard (soon)",
    link: "dashboard",
    icon: CiGrid41
  },
  {
    title: "Infernece APIs (Soon)",
    link: "api",
    icon: CiServer
  },
  {
    title: "Products",
    link: "products",
    icon: CiStar
  },
  {
    title: "Staking",
    link: "staking",
    icon: CiBank
  },
  {
    title: "Affiliate program",
    link: "affiliate",
    icon: CiDollar
  },
  {
    title: "Docs",
    link: "docs",
    icon: CiLink
  }
]

export const StakingImages = [
  AImage,
  BImage,
  CImage

]
