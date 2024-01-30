import { Box, Button, Flex, Grid } from "@chakra-ui/react";

import { useParams } from "react-router";
import { useWallet } from "@/hooks/common/useWallet";

import spacesData from "@/data/spaces/spacesData";

import Spaces from "../Spaces/Spaces";
import Navbar from "@/components/common/Navbar/Navbar";
import DescriptionBox from "@/components/spaces/DescriptionBox/DescriptionBox";
import SpacesContainer from "@/components/containers/SpaceContainer/SpacesContainer";


function SpaceFactory() {
  const params = useParams();
  const space = spacesData.find((s) => s.link === params.space) || Spaces
  const { isConnected, connectWallet, disconnect } = useWallet()

  // useEffect(() => {
  //   const code = params.refCode;
  //   axios({
  //     method: "POST",
  //     url: "https://opai.renderverse.io/check-ref",
  //     data: { refCode: code },
  //   })
  //     .then((res) => {
  //       setAccess(res.data.hasAccess);
  //     })
  //     .catch((err) => {
  //       setAccess(false);
  //       console.log(err);
  //     });
  // }, [params]);

  // if (access) {
  // return <Spaces />;
  // }


  return (
    <Box >
      <Navbar />
      <SpacesContainer >
        <Grid rowGap={"3rem"}>
          <DescriptionBox desc={space.desc} title={space.display_name} />
          {isConnected && <space.component />}
          <Flex mt={12} justifyContent={"center"}>
            {!isConnected && (
              <Button onClick={connectWallet}>{`Connect Wallet`}</Button>
            )}
            {isConnected && (
              <Button onClick={disconnect}>{`Disconnect Wallet`}</Button>
            )}
          </Flex>
        </Grid>

      </SpacesContainer>
    </Box>
  );

}

export default SpaceFactory;
