import { TStatus } from "@/utils/status";
import { useState } from "react";

import { spacesRequests } from "@/requests/spaces/SpacesRequests";

export const useImageGenerator = ({ address }) => {
  const [input, setInput] = useState("")
  const [imgSrc, setImgSrc] = useState("")
  const [status, setStatus] = useState(TStatus.idle)
  const [style, setStyle] = useState("")

  async function generateImage() {
    try {
      setImgSrc("");
      setStatus(TStatus.fetching)
      const response = await spacesRequests.generateImage({ address, input, style })
      console.log(response)
      const data = response.data
      setImgSrc(data.url);
      setStatus(TStatus.fetched)
    } catch (error) {
      console.log(error)
      setStatus(TStatus.error)
    }
  }

  return {
    input, setInput, imgSrc, generateImage, status, setStyle, style
  }
}
