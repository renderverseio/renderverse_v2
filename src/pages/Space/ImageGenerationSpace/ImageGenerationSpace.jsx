import React from 'react'

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useImageGenerator } from "@/hooks/space/ImageGeneration/useImageGenerator";

import ImageGenerationForm from '@/components/space/image_generation_space/ImageGenerationForm/ImageGenerationForm';
import GeneratedImageGrid from '@/components/space/image_generation_space/GeneratedImagesGrid/GeneratedImagesGrid';


export default function ImageGenerationSpace() {
  const { address, isConnected, disconnect } = useWallet()
  const { hasCredits } = useCredits({ address, isConnected });

  const { generateImage, imgSrc, input, setInput, status } = useImageGenerator({
    address,
  });

  return (
    <React.Fragment>
      {isConnected && (
        <React.Fragment>
          <ImageGenerationForm
            input={input}
            setInput={setInput}
            hasCredits={hasCredits}
            generateImage={generateImage}
            imgSrc={imgSrc}
            status={status}
            disconnect={disconnect}
          />
          <GeneratedImageGrid address={address} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
