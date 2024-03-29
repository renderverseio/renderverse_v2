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
          "Renderverse AI Web APP V1",
          "Smart Contract Development & Audit",
          "$RDAI Private Token Sale",
          "$RDAI Public Sale",
          "Onboarding Influencers",
          "Dex Listings - Uniswap",
        ],
        isCompleted: [true, true, true, true, true, false, false],
      },
    ],
  },
  {
    title: "$RDAI token",
    img: Q2,
    phase: [
      {
        phase: "Q3-Q4",
        year: "2023",
        milestones: [
          "Platform Design Concept",
          "User flow Wireframes",
          "$RDAI staking and farming DApp",
          "Prototyping and User testing",
          "CEX Listings",
          "Strategic Partnerships and Alliances",
          "Revenue sharing Integration",
          "Renderverse TG bot",
        ],
        isCompleted: [false, false, false, false, false, false, false],
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
          "Expand user base to 100k users",
          "Decentralised AI Marketplace Beta",
          "Dao system for $RDAI holders",
          "Accessibility and Inclusivity",
          "AI MarketPlace Dashboard",
          "Awareness Campaigns and Brand Building",
          "Iterated UI/UX versions",
        ],
        isCompleted: [false, false, false, false, false, false, false],
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
          "Referral and Ambassador Programs",
          "User Acquisition and Incentive Programs",
          "User Adoption Initiatives",
          "User-Centric Feedback tools",
          "Token Wallet and Management",
          "Renderverse AI API launch",
          "Event Participation and Sponsorship",
        ],
        isCompleted: [false, false, false, false, false, false, false],
      },
    ],
  },
];



export const productsData = [
  {
    title: `Art GPT`,
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
    title: `Trade GPT`,
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
    title: `Token GPT`,
    note1: `Discover latest trends across tokens on multiple exchanges at one place and perform automated technical analysis`,
    note2: `We provide tools tailored specifically for web3 traders to harness the power of GPT technology in trading crypto tokens.`,
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
    title: `Cloud GPT`,
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