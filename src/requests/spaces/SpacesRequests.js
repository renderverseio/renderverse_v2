import axios from "axios"

const generatedImages = async ({ address }) => {
	console.log(address)
	try {
		if (address) {
			return await axios.post(
				"https://api.renderverse.io/renderscan/v1/users/op/generate-img/gens",
				{ walletAddress: address, walletaddress: address }
			)
		}
		return []
	} catch (error) {
		throw error
	}
}

const generateImage = async ({ address, input }) => {
	if (address && input) {
		return await axios
			.post("https://opai.renderverse.io/image-gen", {
				walletAddress: address,
				wallet_address: address,
				prompt: input,
			}, { responseType: "blob", }
			)
	}
}

const getCredits = async ({ address }) => {
	if (address) {
		return await axios.post("https://opai.renderverse.io/credits", {
			wallet_address: address,
		})
	}
}

const generateChatPrompt = async ({ input, person, address }) => {
	return await axios
		.post("https://opai.renderverse.io/chat-gen", {
			question: input,
			person: person,
			walletAddress: address,
			wallet_address: address,
		})

}

const generatedChats = async ({ address }) => {
	return await axios
		.post(
			"https://api.renderverse.io/renderscan/v1/users/op/generate-chat/gens",
			{
				walletAddress: address,
				wallet_address: address,
			}
		)
}

export const spacesRequests = {
	getCredits,
	generateImage,
	generatedImages,
	generatedChats,
	generateChatPrompt,
}

