import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Grid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

import Avatar from "/public/avatars/1.png";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import { useNavigate } from "react-router";
import { avatars } from "../../data/aiSectionData";

function WalletButton(props) {
  const navigate = useNavigate();
  const [changed, setChanged] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [input, setInput] = useState("");

  function addressStrip() {
    return (
      props.address.substring(0, 4) +
      "...." +
      props.address.substring(props.address.length - 4, props.address.length)
    );
  }
  const address = addressStrip();
  return (
    <Box>
      {props.isConnected ? (
        <Flex
          flexDir={"row"}
          columnGap="2rem"
          alignItems="flex-end"
          justifyContent={"flex-end"}
          pr={4}
          pos="relative"
        >
          <ChatModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            input={input}
            setInput={setInput}
          />
          <Flex
            w="220px"
            borderRadius={"xl"}
            cursor="pointer"
            boxShadow={`-2px -2px 2px ${colors.highLightColor}, 2px 2px 4px ${colors.fontLightColor}`}
            px={4}
            py={2}
            columnGap="1rem"
            onMouseEnter={() => setChanged(false)}
            onMouseUp={() => setChanged(false)}
            onMouseMove={() => setChanged(false)}
            onMouseDown={() => setChanged(false)}
            onMouseUpCapture={() => setChanged(false)}
            onMouseMoveCapture={() => setChanged(false)}
            onMouseOverCapture={() => setChanged(false)}
            onMouseOutCapture={() => setChanged(true)}
            onMouseDownCapture={() => setChanged(true)}
            onMouseLeave={() => setChanged(true)}
            onMouseOver={() => setChanged(true)}
            onMouseOut={() => setChanged(true)}
          >
            <Image
              cursor="pointer"
              src={Avatar}
              maxW={"12"}
              borderRadius="50%"
              boxShadow={`-1px -1px 1px ${colors.highLightColor}, 1px 1px 1px ${colors.fontLightColor}`}
            />
            <Flex cursor="pointer" flexDirection={"column"}>
              <Text
                textAlign={"left"}
                fontWeight={"bold"}
                fontFamily={fonts.headingFont}
                color={colors.highLightColor}
              >
                Connected To
              </Text>
              <Text
                textAlign={"left"}
                fontWeight={"bold"}
                fontFamily={fonts.headingFont}
                color={colors.highLightColor}
                fontSize="sm"
              >
                {address}
              </Text>
            </Flex>
          </Flex>
          {!changed ? (
            <Flex
              transition={`all 500ms ease-in-out`}
              zIndex={9999999999999}
              right={"6%"}
              bottom={"-455%"}
              pos={"absolute"}
              onMouseEnter={() => setChanged(false)}
              onMouseUp={() => setChanged(false)}
              onMouseMove={() => setChanged(false)}
              onMouseDown={() => setChanged(false)}
              onMouseUpCapture={() => setChanged(false)}
              onMouseMoveCapture={() => setChanged(false)}
              onMouseOverCapture={() => setChanged(false)}
              onMouseOutCapture={() => setChanged(true)}
              onMouseLeave={() => setChanged(true)}
              onMouseOver={() => setChanged(true)}
              onMouseOut={() => setChanged(true)}
            >
              <Flex
                minW="224px"
                borderRadius="xl"
                py={4}
                border={`2px solid ${colors.highLightColor}`}
                borderTop={0}
                borderTopRadius={0}
                px={4}
                justifyContent={"center"}
                alignItems="center"
                bg={colors.bgColor}
                flexDirection={"column"}
                rowGap="1rem"
              >
                <Box
                  display={"flex"}
                  justifyContent="center"
                  flexDir={"column"}
                  alignItems="center"
                  borderRadius="xl"
                  bg={colors.boxBorder}
                  px={4}
                  py={2}
                  w="100%"
                >
                  <Text
                    fontFamily={fonts.specialFont}
                    color={colors.highLightColor}
                    fontSize={{ base: "2xl" }}
                  >
                    Bal
                  </Text>
                  <Text
                    fontFamily={fonts.specialFont}
                    color={colors.highLightColor}
                    fontSize={{ base: "3xl" }}
                  >
                    {props.balance} BNB
                  </Text>
                </Box>
                <Box
                  cursor={"pointer"}
                  onClick={() => navigate("/dapp")}
                  bg={colors.boxBorder}
                  px={4}
                  py={2}
                  w="100%"
                  _hover={{
                    bg: colors.bgColor,
                    color: colors.highLightColor,

                    boxShadow: `-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`,
                  }}
                  borderRadius={"md"}
                >
                  <Text
                    textAlign="center"
                    fontWeight={"bold"}
                    fontFamily={fonts.specialFont}
                    color={colors.highLightColor}
                  >
                    My Spaces
                  </Text>
                </Box>
                <Box
                  cursor={"pointer"}
                  onClick={() => {
                    setModalIsOpen(true);
                  }}
                  bg={colors.boxBorder}
                  px={4}
                  py={2}
                  w="100%"
                  _hover={{
                    bg: colors.bgColor,
                    color: colors.highLightColor,

                    boxShadow: `-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`,
                  }}
                  borderRadius={"md"}
                >
                  <Text
                    textAlign="center"
                    fontWeight={"bold"}
                    fontFamily={fonts.specialFont}
                    color={colors.highLightColor}
                  >
                    Edit Profile
                  </Text>
                </Box>
                <Button
                  zIndex={999999999999999}
                  w="100%"
                  onClick={() => {
                    props.disconnect();
                    window.location.reload();
                  }}
                  fontFamily={fonts.parafont}
                  fontWeight="bold"
                  bg={colors.boxBorder}
                  color={colors.highLightColor}
                  _hover={{ color: colors.boxBorder, bg: colors.bgColor }}
                  boxShadow={`0px 0px 4px ${colors.boxBorder}`}
                >
                  Disconnect
                </Button>
              </Flex>
            </Flex>
          ) : null}
        </Flex>
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

export default WalletButton;

function ChatModal(props) {
  const [clicked, setClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <Modal
      size="4xl"
      isOpen={props.modalIsOpen}
      onClose={() => props.setModalIsOpen(false)}
    >
      <ModalOverlay />
      <ModalContent
        py={4}
        boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
        bg={colors.bgColor}
      >
        <ModalHeader mt={4}>
          <Text
            my={4}
            boxShadow={`-2px -2px 3px ${colors.fontLightColorV2}, 2px 2px 7px ${colors.boxEndColor}`}
            p={3}
            bg={`rgba(0,0,0,.7)`}
            borderRadius="md"
            fontWeight={"bold"}
            fontFamily={fonts.parafont}
            color={colors.fontLightColor}
            fontSize={{ base: "3xl" }}
          >
            Edit Profile
          </Text>
        </ModalHeader>
        <ModalBody>
          <Text
            value={props.input}
            onChange={(i) => props.setInput(i.target.value)}
            variant={"unstyled"}
            my={2}
            border={`2px groove ${colors.boxBorder}`}
            p={4}
            fontFamily={fonts.parafont}
            fontSize={{ base: "md" }}
            fontWeight="bold"
            color={colors.fontLightColor}
          >
            Nick Name
          </Text>
          <FormControl>
            <Input
              value={props.input}
              onChange={(i) => props.setInput(i.target.value)}
              placeholder="Elon Musk..."
              variant={"unstyled"}
              border={`2px groove ${colors.boxBorder}`}
              p={4}
              fontFamily={fonts.parafont}
              fontSize={{ base: "md" }}
              fontWeight="bold"
              color={colors.fontLightColor}
            />
          </FormControl>
          <Text
            value={props.input}
            onChange={(i) => props.setInput(i.target.value)}
            variant={"unstyled"}
            my={2}
            mb={4}
            border={`2px groove ${colors.boxBorder}`}
            p={4}
            fontFamily={fonts.parafont}
            fontSize={{ base: "md" }}
            fontWeight="bold"
            color={colors.fontLightColor}
          >
            Choose Avatar
          </Text>
          <Grid
            gridTemplateColumns={{
              base: "1fr 1fr",
              lg: "1fr 1fr 1fr 1fr",
              xl: "1fr 1fr 1fr 1fr 1fr 1ft",
            }}
            rowGap="1rem"
            columnGap={"1rem"}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((a, i) => (
              <Box
                onClick={() => {
                  let click = [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                  ];
                  click[a] = !click[a];
                  setClicked([...click]);
                }}
                key={i}
              >
                <Image
                  transition={`all 200ms ease-in-out`}
                  border={clicked[a] ? `2px solid ${colors.highLightColor}` : 0}
                  src={avatars[a]}
                />
              </Box>
            ))}
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="orange"
            mr={3}
            onClick={() => props.setModalIsOpen(false)}
          >
            Update
          </Button>
          <Button
            colorScheme="red"
            mr={3}
            onClick={() => props.setModalIsOpen(false)}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
