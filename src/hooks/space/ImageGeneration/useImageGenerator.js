import { TStatus } from "@/utils/status";
import { useState } from "react";

import { blobToBase64 } from "@/utils/blobTobase64";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";

export const useImageGenerator = ({ address }) => {
	const [input, setInput] = useState("")
	const [imgSrc, setImgSrc] = useState("")
	const [status, setStatus] = useState(TStatus.idle)

	async function generateImage() {
		try {
			setImgSrc("");
			setStatus(TStatus.fetching)
			const response = await spacesRequests.generateImage({ address, input })
			const blob = response.data
			blobToBase64(blob).then((c) => {
				setImgSrc(c);
				setStatus(TStatus.fetched)
			});
		} catch (error) {
			console.log(error)
			setStatus(TStatus.error)
		}
	}

	return {
		input, setInput, imgSrc, generateImage, status
	}
}