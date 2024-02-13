import AI_IMG_GEN from '@/assets/products/aigen.jpg'
import GPT from '@/assets/products/gpt.jpg'
import AI_TRADING_BOT from '@/assets/products/aitrading.jpg'
import API from '@/assets/products/apis.jpg'

import Q1 from '@/assets/roadmap/q1.png'
import Q2 from '@/assets/roadmap/q2.png'
import Q3 from '@/assets/roadmap/q3.png'
import Q4 from '@/assets/roadmap/q4.png'

export const roadMapData = [
  {
    title: "AI Development",
    img: Q1,
    phase: [
      {
        phase: "Q3-Q4",
        year: "2023",
        milestones: [
          "Research and Data Collection",
          "Models Development",
          "Models Testing and Validation",
          "Renderverse AI Web APP V1",
          "Deployment and Integration",
          "Decentralised AI Marketplace Beta",
          "Renderverse TG bot",
          "Renderverse AI API launch",
        ],
        isCompleted: [true, true, true, true, true, false, false],
      },
    ],
  },
  {
    title: "$RAI token",
    img: Q2,
    phase: [
      {
        phase: "Q3-Q4",
        year: "2023",
        milestones: [
          "$RAI Token Design",
          "Smart Contract Development & Audit",
          "$RAI Private Token Sale",
          "$RAI Public Sale",
          "Dex Listings - Uniswap",
          "$RAI staking and farming DApp",
          "Dao system for $RAI holders",
          "Revenue sharing Integration",
        ],
        isCompleted: [true, true, false, false, false, false, false],
      },
    ],
  },
  {
    title: "Ui/UX",
    img: Q3,
    phase: [
      {
        phase: "Q3-Q4",
        year: "2023",
        milestones: [
          "Platform Design Concept",
          "User flow Wireframes",
          "Prototyping and User testing",
          "Accessibility and Inclusivity",
          "AI MarketPlace Dashboard",
          "Token Wallet and Management",
          "Beta Launch to Users",
          "Iterated UI/UX versions",
        ],
        isCompleted: [true, true, true, true, true, true, true],
      },
    ],
  },
  {
    title: "Marketing and Expansion",
    img: Q4,
    phase: [
      {
        phase: "Q3-Q4",
        year: "2023",
        milestones: [
          "Awareness Campaigns and Brand Building",
          "Onboarding Influencers",
          "Referral and Ambassador Programs",
          "User Acquisition and Incentive Programs",
          "User Adoption Initiatives",
          "Strategic Partnerships and Alliances",
          "User-Centric Feedback tools",
          "Event Participation and Sponsorship",
        ],
        isCompleted: [false, false, false, false, false, false, false],
      },
    ],
  },
];



export const productsData = [
  {
    title: `AI Art Generator`,
    note1: `Say goodbye to boring NFTs created by other platforms. Renderverse enables you to create stunning AI Arts for absolutely free.`,
    note2: `Users can easily mint and inscribe unique creations as BRC-721 tokens instantly on the Bitcoin blockchain.`,
    link: ``,
    img: AI_IMG_GEN,
    p: 6,
    parentAnimations: {
      visible: {
        opacity: 1,
        scale: 1
      },
      hidden: {
        opacity: 0,
        scale: 0
      }
    },
    childAnimations: {
      visible: {
        opacity: 1,
        scale: 1,
        y: 0
      },
      hidden: {
        y: 100,
        opacity: 1,
        scale: 1
      }
    }
  },
  {
    title: `AI Trading Bot`,
    note1: `Seize trading opportunities like never before with our AI Trading Bot. We provide AI-driven insights and trends acorss all the coins in top exchanges.`,
    note2: `Users can seamlessly trade through our telegram bot and maximize profits.`,
    link: ``,
    img: AI_TRADING_BOT,
    p: 6,
    parentAnimations: {
      visible: {
        opacity: 1,
        rotate: -8,
        scale: 1
      },
      hidden: {
        opacity: 0,
        rotate: 0,
        scale: 0
      }
    },
    childAnimations: {
      visible: {
        rotate: -8
      },
      hidden: {
        rotate: 0
      }
    }
  },
  {
    title: `GPT Plugins and Extensions`,
    note1: `Discover our suite of extensions and plugins designed to unlock the full potential of GPT in your endeavors. `,
    note2: `We provide tools tailored specifically for web3 users to harness the power of GPT technology on the BRC20 ecosystem.`,
    link: ``,
    img: GPT,
    p: 6,
    parentAnimations: {
      visible: {
        rotate: -8
      },
      hidden: {
        rotate: -8
      }
    },
    childAnimations: {
      visible: {
        scale: 1.2,
        rotate: -8,
        x: -45,
        y: -45
      },
      hidden: {
        scale: 1,
        rotate: -8,
      }
    }
  },
  {
    title: `Inference APIs`,
    note1: `Unleash the potential of our Inference APIs to build revolutionary products within the Renderverse ecosystem.`,
    note2: `We provide extensive API models and GPU Infrastrucutre for developers and creators to build on top of our advanced models.`,
    link: ``,
    img: API,
    p: 6,
    parentAnimations: {
      visible: {
        rotate: 0
      },
      hidden: {
        rotate: -8
      }
    },
    childAnimations: {
      visible: {
        scale: 1
      },
      hidden: {
        scale: .8
      }
    }
  },
];


export const gradientBgs = [
  {
    bg: "#D9AFD9",
    bgImg: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
  },
  {
    bg: "#85FFBD",
    bgImg: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
  },
  {
    bg: "#8EC5FC",
    bgImg: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  },
  {
    bg: "#FBAB7E",
    bgImg: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
  {
    bg: "#FFDEE9",
    bgImg: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
  },
];


export const gradientBgs2 = [
  `linear-gradient(to right, #446a46, #5a8d5a, #71b26e, #8bd882, #a6ff96);`,
  `linear-gradient(to right, #95bdff, #68ceff, #20deff, #00edfe, #1ff8e5);`,
  `linear-gradient(to right, #6a11cb 0%, #2575fc 100%);`,
  `linear-gradient(to right, #f83600 0%, #f9d423 100%);`,
  `linear-gradient(to top, #ff0844 0%, #ffb199 100%);`,
]