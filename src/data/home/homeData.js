import AI_IMG_GEN from '@/assets/products/aigen.jpg'
import GPT from '@/assets/products/gpt.jpg'
import AI_TRADING_BOT from '@/assets/products/aitrading.jpg'
import API from '@/assets/products/apis.jpg'

export const roadMapData = [
  {
    title: `r1 Lorem ipsum  `,
    note1: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
    note2: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
    link: `d2`,
    desc: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
  },
  {
    title: `r1 Lorem ipsum  `,
    note1: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
    note2: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
    link: `d2`,
    desc: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
  },
  {
    title: `r1 Lorem ipsum  `,
    note1: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
    note2: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
    link: `d2`,
    desc: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
  },
  {
    title: `r1 Lorem ipsum  `,
    note1: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
    note2: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
    link: `d2`,
    desc: `d1 adipisicing minim sint cillum sint consectetur cupidatat. dolor sit amet, qui minim labore`,
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
        scale: 1
      },
      hidden: {
        opacity: 0,
        scale: 0
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
        rotate: -8
      },
      hidden: {
        opacity: 0,
        rotate: 0
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
    bg: "#4158D0",
    bgImg: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  },
  {
    bg: "#0093E9",
    bgImg: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
  {
    bg: "#8EC5FC",
    bgImg: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  },
  {
    bg: "#FBAB7E",
    bgImg: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
  },
];
