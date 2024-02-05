import React from 'react'

import { useWallet } from "@/hooks/common/useWallet";
import { useCredits } from "@/hooks/common/useCredits";
import { useImageGenerator } from "@/hooks/space/ImageGeneration/useImageGenerator";

import ImageGenerationForm from '@/components/space/image_generation_space/ImageGenerationForm/ImageGenerationForm';
import GeneratedImageGrid from '@/components/space/image_generation_space/GeneratedImagesGrid/GeneratedImagesGrid';

import useUNISatWallet from '@/blockchain/useUNISatWallet';
import { Box, Button, Flex } from '@chakra-ui/react';


export default function ImageGenerationSpace() {
  const { address, isConnected, disconnect } = useWallet()
  const { hasCredits } = useCredits({ address, isConnected });
  const { account, connectUNISatWallet, sendBitcoin } = useUNISatWallet()

  const { generateImage, imgSrc, input, setInput, status } = useImageGenerator({
    address,
  });

  return (
    <React.Fragment>
      {isConnected && (
        <React.Fragment>
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
