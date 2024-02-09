import React from 'react'

import { useCredits } from "@/hooks/common/useCredits";
import { useImageGenerator } from "@/hooks/space/ImageGeneration/useImageGenerator";

import ImageGenerationForm from '@/components/space/image_generation_space/ImageGenerationForm/ImageGenerationForm';
import GeneratedImageGrid from '@/components/space/image_generation_space/GeneratedImagesGrid/GeneratedImagesGrid';

import { Container, } from '@chakra-ui/react';
import DescriptionBox from '@/components/spaces/DescriptionBox/DescriptionBox';
import CreditsCheckerComponent from '@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent';
import useUNISatWallet from '@/blockchain/useUNISatWallet';


export default function ImageGenerationSpace() {
  const { isConnected, address, disconnect } = useUNISatWallet()
  const { hasCredits } = useCredits({ address, isConnected });


  const { generateImage, imgSrc, input, setInput, status, style, setStyle } = useImageGenerator({
    address,
  });

  console.log(isConnected)


  return (
    <React.Fragment>
      <Container display={"grid"} rowGap={"2rem"} mt={12} maxW="90%" mx="auto">
        <DescriptionBox title={`Image Generation`} desc={`These apps find applications in artistic endeavors, content creation, and design, offering a user-friendly interface for individuals to effortlessly produce a wide range of AI-generated images tailored to their preferences.`} />
        <ImageGenerationForm
          input={input}
          style={style}
          setStyle={setStyle}
          setInput={setInput}
          hasCredits={hasCredits}
          generateImage={generateImage}
          imgSrc={imgSrc}
          status={status}
          disconnect={disconnect}
        />
        <CreditsCheckerComponent hasCredits={hasCredits} />
        <GeneratedImageGrid address={address} />
      </Container>
    </React.Fragment>
  );
}
