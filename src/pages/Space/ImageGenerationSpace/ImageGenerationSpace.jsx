import React from "react";

import { useCredits } from "@/hooks/common/useCredits";
import { useImageGenerator } from "@/hooks/ImageGeneration/useImageGenerator";

import ImageGenerationForm from "@/components/image_generation_space/ImageGenerationForm/ImageGenerationForm";

import { Box, Container, Flex } from "@chakra-ui/react";

import useUNISatWallet from "@/blockchain/useUNISatWallet";
import { useWalletStore } from "@/blockchain/useWalletStore";
import DescriptionBox from "@/components/custom/DescriptionBox/DescriptionBox";
import Back from "@/components/common/Back/Back";

export default function ImageGenerationSpace() {
  const { connectWallet } = useUNISatWallet();
  const { wallet } = useWalletStore((state) => state);
  const { address, isConnected } = wallet;
  const { hasCredits } = useCredits({ address, isConnected });

  const { generateImage, imgSrc, input, setInput, status, model, setModel } =
    useImageGenerator({
      address,
    });

  console.log(wallet);

  return (
    <React.Fragment>
      <Container display={"grid"} rowGap={"2rem"} mt={12} maxW="90%" mx="auto">
        <Back />
        <DescriptionBox
          title="Art GPT"
          desc={`Dive into the realm of artistic exploration with our advanced AI Art Generator. We've created a unique platform that allows you to unleash your creativity. We also enable users to easily mint and inscribe your unique creations as BRC-721 tokens instantly on the Bitcoin blockchain.`}
        />
        {isConnected && (
          <>
            <ImageGenerationForm
              input={input}
              model={model}
              setModel={setModel}
              setInput={setInput}
              hasCredits={hasCredits}
              imgSrc={imgSrc}
              generateImage={generateImage}
              status={status}
            />
          </>
        )}
        {!isConnected && (
          <Flex p={5} justifyContent={"center"}>
            <Box
              p={4}
              borderRadius={"lg"}
              boxShadow={"lg"}
              fontWeight={"bold"}
              className="btn btn-1"
              onClick={connectWallet}
            >
              Connect Wallet
            </Box>
          </Flex>
        )}
      </Container>
    </React.Fragment>
  );
}
