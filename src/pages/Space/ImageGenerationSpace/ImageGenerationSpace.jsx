import React from 'react'

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useImageGenerator } from "@/hooks/space/ImageGeneration/useImageGenerator";

import ImageGenerationForm from '@/components/space/image_generation_space/ImageGenerationForm/ImageGenerationForm';
import GeneratedImageGrid from '@/components/space/image_generation_space/GeneratedImagesGrid/GeneratedImagesGrid';

import useUNISatWallet from '@/blockchain/useUNISatWallet';
import { Box, Button, Container, Flex } from '@chakra-ui/react';
import DescriptionBox from '@/components/spaces/DescriptionBox/DescriptionBox';


export default function ImageGenerationSpace() {
  const { address, isConnected, disconnect } = useWallet()
  const { hasCredits } = useCredits({ address, isConnected });
  const { account, connectUNISatWallet, sendBitcoin } = useUNISatWallet()

  const { generateImage, imgSrc, input, setInput, status, style, setStyle } = useImageGenerator({
    address,
  });

  return (
    <React.Fragment>
      {isConnected && (
        <Container mt={12} maxW="90%" mx="auto">
          <DescriptionBox title={`Image Generation`} desc={`These apps find applications in artistic endeavors, content creation, and design, offering a user-friendly interface for individuals to effortlessly produce a wide range of AI-generated images tailored to their preferences.`} />
          <Box p={4}>
            <Button onClick={connectUNISatWallet}>Connect BWallet</Button>
            <Button ml={2} onClick={() => sendBitcoin("tb1qhzz7lhds6s5uy37mlpntt7velvgf8ktrr46yq4")}>Send Bitcoin</Button>
            <Box>{account.address} </Box>
            <Flex columnGap={"1rem"}>
              <Box>{account.balance.total} </Box>
              <Box>{account.balance.confirmed} </Box>
              <Box>{account.balance.unconfirmed} </Box>
            </Flex>
          </Box>

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
          <GeneratedImageGrid address={address} />
        </Container>
      )}
    </React.Fragment>
  );
}
