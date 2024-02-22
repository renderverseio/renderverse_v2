import Mint from '@/assets/navbar/Mint.svg'
import Trade from '@/assets/navbar/Trade.svg'
import Develop from '@/assets/navbar/Develop.svg'
import Share from '@/assets/navbar/Share.svg'
import AIArt from '@/assets/navbar/Art.svg'
import AITrade from '@/assets/navbar/Trading.svg'
import GPT from '@/assets/navbar/GPT.svg'
import APIs from '@/assets/navbar/Apis.svg'

import Blog from '@/assets/navbar/Blog.svg'
import Docs from '@/assets/navbar/Docs.svg'
import Tuts from '@/assets/navbar/Tutorials.svg'
import Stories from '@/assets/navbar/Stories.svg'

import X from '@/assets/navbar/X.svg'
import Telegram from '@/assets/navbar/Telegram.svg'
import Discord from '@/assets/navbar/Dicord.svg'
import Email from '@/assets/navbar/Mail.svg'


export const desktopMenuItems = [
  {
    menu: "Revshare",
    options: [],
  },
  {
    menu: "Use Cases",
    options: [
      {
        icon: Mint,
        title: "Mint",
        subText: "Experience one-click minting on BRC-20",
        link: "/dapp/dashboard"
      },
      {
        icon: Trade,
        title: "Trade",
        subText: "Trade NFTs on the BRC-20 ecosystem",
        link: "/dapp/dashboard"
      },
      {
        icon: Develop,
        title: "Develop",
        subText: "Craft your own AI models using our APIs",
        link: "/dapp/dashboard"
      },
      {
        icon: Share,
        title: "Share",
        subText: "Deploy and share your models on our GPU Infra",
        link: "/dapp/dashboard"
      },
    ],
  },
  {
    menu: "Products",
    options: [
      {
        icon: AIArt,
        title: "AI Art Generator",
        subText: "Create 3D BRC-20 NFTs for free",
        link: "/dapp/image-generation"
      },
      {
        icon: AITrade,
        title: "AI Trading Bot",
        subText: "Maximize profits with AI-driven trading insights",
        link: "/dapp/dashboard"
      },
      {
        icon: GPT,
        title: "GPT Plugins",
        subText: "Harness the power of GPT through our plugins",
        link: "/dapp/products"
      },
      {
        icon: APIs,
        title: "Inference APIs",
        subText: "Build advanced community products using our APIs",
        link: "/dapp/api"
      },
    ],
  },
  {
    menu: "Resources",
    options: [
      {
        icon: Blog,
        title: "Blog",
        subText: "Stay updated with our latest news and updates",
        link: "/dapp/dashboard"
      },
      {
        icon: Docs,
        title: "Documentation",
        subText: "Dive into the technology behind RenderVerse",
        link: "/dapp/dashboard"
      },
      {
        icon: Tuts,
        title: "Tutorials",
        subText: " Learn how to build products using RenderVerse AI",
        link: "/dapp/dashboard"
      },
      {
        icon: Stories,
        title: "User Stories",
        subText: "Discover the success stories of developers",
        link: "/dapp/dashboard"
      },
    ],
  },
  {
    menu: "Socials",
    options: [
      {
        icon: X,
        title: "Twitter",
        subText: "Follow us on twitter to learn more",
        link: "https://twitter.com/teamrenderverse"
      },
      {
        icon: Telegram,
        title: "Telegram",
        subText: "Join our telegram for latest updates",
        link: "https://t.me/renderversechat"
      },
      {
        icon: Discord,
        title: "Discord",
        subText: "Join our Discord channel for exciting prizes",
        link: "https://renderverse.io/"
      },
      {
        icon: Email,
        title: "Email",
        subText: "Feel free to write us if you have more queries",
        link: "mailto:chakri@renderverse.io"
      },
    ],
  },
];

export const mobileMenuItems = [
  `Revshare`,
  `Dashboard`,
  `Templates`,
  `Documentation`,
  `Tutorials`,
  `Blog`,
  `User Stories`,
  `Changelog`,
];
