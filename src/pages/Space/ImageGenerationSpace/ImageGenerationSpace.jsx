import { Box, Flex, Grid } from "@chakra-ui/react";

import { bsc } from "wagmi/chains";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import { useCredits } from "@/hooks/space/ImageGeneration/useCredits";
import { useImageGenerator } from "@/hooks/space/ImageGeneration/useImageGenerator";

import GeneratedImageGrid from "@/components/spaces/imageGenerationSpace/GeneratedImagesGrid";
import DescriptionBox from "@/components/spaces/DescriptionBox";

import ImageGenerationForm from "../../../components/spaces/imageGenerationSpace/ImageGenerationForm";
import { Button } from "react-scroll";

export default function ImageGenerationSpace() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { open, setDefaultChain } = useWeb3Modal();
  const { data: balance, isFetched: balanceFeteched } = useBalance({
    address,
  });

  function connectWallet() {
    open();
    setDefaultChain(bsc);
  }

  const { credits, hasCredits } = useCredits({ address, isConnected });
  const { generateImage, imgSrc, input, setInput, status } = useImageGenerator({
    address,
  });

  return (
    <Box
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundBlendMode="color"
      minH={{ base: "auto", xl: "100vh" }}
      backgroundPosition="center"
    >
      <Box>
        <DescriptionBox
          title={`Image Gen Space`}
          desc={`This app generates Images, Simply enter a any text that you want the
			prompt to be generated based on.`}
        />
        {isConnected && (
          <Box mt={12}>
            <Grid
              rowGap="1rem"
              columnGap={"2rem"}
              mx="auto"
              gridTemplateColumns={{
                base: "1fr",
                lg: "1fr 1fr",
              }}
            >
              <ImageGenerationForm
                input={input}
                setInput={setInput}
                hasCredits={hasCredits}
                generateImage={generateImage}
                imgSrc={imgSrc}
                status={status}
                disconnect={disconnect}
              />
            </Grid>
            <Box mt={12}>
              <GeneratedImageGrid address={address} />
            </Box>
          </Box>
        )}
        {!isConnected && (
          <Flex mt={12} justifyContent={"center"}>
            {!isConnected && (
              <Button onClick={connectWallet}>{`Connect Wallet`}</Button>
            )}
          </Flex>
        )}
      </Box>
    </Box>
  );
}
