import ImageGenerationSpace from "@/pages/Space/ImageGenerationSpace/ImageGenerationSpace";
import PatternDetectorSpace from "@/pages/Space/PatternDectectorSpace/PatternDetectorSpace";
import TokenAnaylzerSpace from "@/pages/Space/TokenAnalyzerSpace/TokenAnalyzerSpace";
import ChatAssistantSpace from "@/pages/Space/ChatAssistantSpace/ChatAssistantSpace";
import ChatGPTPromptSpace from "@/pages/Space/ChatGPTPromptSpace/ChatGPTPromptSpace";
import TokenTrackerSpace from "@/pages/Space/TokenTrackerSpace/TokenTracker";
import PumpFinderSpace from "@/pages/Space/PumpFinderSpace/PumpFinderSpace";
import ExtendedPromptSpace from "@/pages/Space/ExtendedPromptSpace/ExtendePromptSpace";
import FaceSwapSpace from "@/pages/Space/FaceSwapSpace/FaceSwapSpace";

const spacesData = [
  {
    display_name: "Image Generation",
    tags: ["ai", "image", "generation"],
    desc: "These apps find applications in artistic endeavors, content creation, and design, offering a user-friendly interface for individuals to effortlessly produce a wide range of AI-generated images tailored to their preferences.",
    link: "image-generation",
    component: ImageGenerationSpace,
  },
  {
    display_name: "Chat Assistant",
    tags: ["chat", "ai", "text"],
    desc: "The chat assistant uses natural language processing algorithms to understand and respond to user input. It can engage in casual conversations, answer queries, and even tell jokes or anecdotes in a manner consistent with the chosen celebrity's style.",
    link: "chat-assistant",
    component: ChatAssistantSpace,
  },
  {
    display_name: "Token Tracker",
    tags: ["crypto", "ai", "trading"],
    link: "token-tracker",
    desc: " A Leveraging AI algorithms, the tracker may offer price prediction models for selected cryptocurrencies based on historical data and market trends, aiding users in making informed future investment decisions.",
    component: TokenTrackerSpace,
  },
  {
    display_name: "Pump Finder",
    tags: ["crypto", "ai", "trading"],
    link: "pump-finder",
    desc: "The tool operates in real-time, continuously monitoring market fluctuations and price movements to promptly identify any irregularities that may suggest a token pump.",
    component: PumpFinderSpace,
  },
  {
    display_name: "Pattern Detector",
    tags: ["crypto", "ai", "trading"],
    link: "pattern-detector",
    desc: "The analyzer employs a sophisticated pattern recognition algorithm to identify a variety of chart patterns, including but not limited to triangles, flags, head and shoulders, and more. This helps users anticipate potential price movements.",
    component: PatternDetectorSpace,
  },
  {
    display_name: "Token Analyzer",
    tags: ["crypto", "ai", "trading"],
    link: "token-analyzer",
    desc: "Integrating sentiment analysis algorithms, the tool gauges the overall market sentiment related to specific coins. This information can be valuable for understanding community perceptions and potential market trends.",
    component: TokenAnaylzerSpace,
  },
  {
    display_name: "ChatGPT Prompt",
    tags: ["ai", "text", "text2text"],
    desc: "This app generates ChatGPT prompts, it’s based on a BART model trained on this dataset. 📓 Simply enter a persona that you want the prompt to be generated based on. 🧙🏻🧑🏻‍🚀🧑🏻‍🎨🧑🏻‍🔬🧑🏻‍💻🧑🏼‍🏫🧑🏽‍🌾",
    link: "chatgpt-prompt",
    component: ChatGPTPromptSpace,
  },
  {
    display_name: "Extended Prompt",
    tags: ["text", "image", "generation"],
    link: "extended-prompt",
    desc: "A prompt generation from text app utilizes natural language processing techniques to generate creative writing prompts based on user input. Users can provide keywords, themes, or specific preferences.",
    component: ExtendedPromptSpace
  },

  {
    display_name: "Face Swap",
    tags: ["ai", "image", "generation"],
    link: "face-swap",
    desc: "The algorithm then replaces the facial features of one individual with those of another. This process involves overlaying the features of one face onto the image of another while maintaining the original image",
    component: FaceSwapSpace,
  },

];

export default spacesData


