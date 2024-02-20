import { TStatus } from "@/utils/status";
import { useState } from "react";

import { spacesRequests } from "@/requests/spaces/SpacesRequests";

export const useImageGenerator = ({ address }) => {
  const [input, setInput] = useState("")
  const [imgSrc, setImgSrc] = useState("")
  const [status, setStatus] = useState(TStatus.idle)
  const [model, setModel] = useState("")

  async function generateImage() {
    try {
      setImgSrc("");
      setStatus(TStatus.fetching)
      const response = await spacesRequests.generateImage({ address, input, model })
      const url = response.data.url
      setImgSrc(url)
      setStatus(TStatus.fetched)
    } catch (error) {
      console.log(error)
      setStatus(TStatus.error)
    }
  }

  return {
    input, setInput, imgSrc, generateImage, status, model, setModel
  }
}
