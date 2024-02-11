import React from "react";

import { useCredits } from "@/hooks/common/useCredits";
import { useImageGenerator } from "@/hooks/space/ImageGeneration/useImageGenerator";

import ImageGenerationForm from "@/components/space/image_generation_space/ImageGenerationForm/ImageGenerationForm";
import GeneratedImageGrid from "@/components/space/image_generation_space/GeneratedImagesGrid/GeneratedImagesGrid";

import { Box, Container, Flex } from "@chakra-ui/react";
import DescriptionBox from "@/components/spaces/DescriptionBox/DescriptionBox";
import CreditsCheckerComponent from "@/components/spaces/CreditsCheckerComponent/CreditsCheckerComponent";
import useUNISatWallet from "@/blockchain/useUNISatWallet";
import { useWalletStore } from "@/blockchain/useWalletStore";

export default function ImageGenerationSpace() {
  const { connectWallet, disconnect } = useUNISatWallet();
  const { wallet } = useWalletStore((state) => state);
  const { address, isConnected, balance } = wallet;
  const { hasCredits } = useCredits({ address, isConnected });

  const { generateImage, imgSrc, input, setInput, status, model, setModel } =
    useImageGenerator({
      address,
    });

  console.log(wallet);

  return (
    <React.Fragment>
      <Container display={"grid"} rowGap={"2rem"} mt={12} maxW="90%" mx="auto">
        <DescriptionBox
          title={`Image Generation`}
          desc={`These apps find applications in artistic endeavors, content creation, and design, offering a user-friendly interface for individuals to effortlessly produce a wide range of AI-generated images tailored to their preferences.`}
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
              status={status}
            />
            <CreditsCheckerComponent
              onClick={generateImage}
              onClickText="Generate Image"
              hasCredits={hasCredits}
            />
          </>
        )}
        {!isConnected && (
          <Flex justifyContent={"center"}>
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
