import axios from "axios"

const generateImage = async ({ address, input, model }) => {
  return await axios
    .post("https://opai.renderverse.io/image-gen", {
      walletAddress: address,
      wallet_address: address,
      prompt: input,
      model: model
    },
    )
}

const getCredits = async ({ address }) => {
  return await axios
    .post("https://opai.renderverse.io/credits", {
      wallet_address: address,
    })
}

const generateChatPromptEntry = async ({ address }) => {
  return await axios
    .post("https://opai.renderverse.io/chat-gen", {
      wallet_address: address
    })
}

const localHost = 'http://localhost:5000/'
const generateChatPrompt = async ({ text }) => {
  return await axios
    .post(localHost + "chat-gen", {
      // .post("https://opai.renderverse.io/chat-gen", {
      text: text
    })
}


const getTopCoins = async ({ address }) => await axios.post(localHost + "scores", {
  wallet_address: address,
}, {})
const getTrendingCoins = async ({ address }) => await axios.post(localHost + "trending", { wallet_address: address })

export const spacesRequests = {
  getCredits,
  getTopCoins,
  generateImage,
  getTrendingCoins,
  generateChatPrompt,
  generateChatPromptEntry
}

