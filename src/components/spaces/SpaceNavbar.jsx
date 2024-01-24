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
import { colors } from "../../theme/colors";
import { BiArrowBack } from "react-icons/bi";
import { fonts } from "../../theme/fonts";
import { useNavigate } from "react-router";
import Logo from "/public/logos/icon_text.webp";
import { useState } from "react";

import { avatars } from "../../data/aiSectionData";

export default function SpaceNavbar(props) {
  const nickname = localStorage.getItem("nickname");
  const avatar = Number(localStorage.getItem("avatar")) || 0;
  const navigate = useNavigate();

  function addressStrip() {
    return (
      props.address.substring(0, 4) +
      "...." +
      props.address.substring(props.address.length - 4, props.address.length)
    );
  }
  const address = addressStrip();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [changed, setChanged] = useState(true);
  const [input, setInput] = useState(nickname ? nickname : "");

  function updateProfile(as) {
    localStorage.setItem("nickname", input);
    localStorage.setItem("avatar", as);
  }
  console.log(props);

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{ base: "1fr", xl: "1fr 1fr 1fr" }}
      alignItems="center"
      minH="7vh"
      p={2}
      // bg={`rgba(0,0,0,.4)`}
      backgroundImage={props.grad}
      justifyContent="space-between"
      className="bg_img"
      boxShadow={`1px 1px 1px ${colors.fontLightColorV2}, -1px -1px 1px ${colors.boxEndColor}`}
    >
      <ChatModal
        updateProfile={updateProfile}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        input={input}
        setInput={setInput}
      />
      <Flex
        cursor={"pointer"}
        onClick={() => navigate(-1)}
        alignItems={"center"}
        columnGap=".5rem"
      >
        <Box bg="black" px={2} borderRadius="md">
          <BiArrowBack color={"white"} size={36} />
        </Box>
        <Text
          textAlign={"left"}
          fontWeight={"bold"}
          fontFamily={fonts.headingFont}
          color={colors.highLightColor}
        ></Text>
      </Flex>
      <Flex
        display={{ base: "none", lg: "flex" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          p={2}
          borderRadius="md"
          px={4}
          bg="black"
          maxW="220px"
          src={Logo}
        />
      </Flex>
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
                src={avatars[avatar ? avatar : 0]}
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
                zIndex={9999999999999}
                right={"2.5%"}
                bottom={"-470%"}
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
                  minW="220px"
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
                      fontSize={{ base: "3xl" }}
                    >
                      Bal
                    </Text>
                    <Text
                      fontSize={{ base: "2xl" }}
                      fontFamily={fonts.specialFont}
                      color={colors.highLightColor}
                    >
                      {Number(props.balance).toFixed(4)} BNB
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
                      Credits : {props.credits}
                    </Text>
                  </Box>
                  <Box
                    cursor={"pointer"}
                    onClick={() => setModalIsOpen(true)}
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
    </Box>
  );
}

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
              xl: "1fr 1fr 1fr 1fr 1fr 1fr",
            }}
            py={6}
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
                  props.updateProfile(a);
                }}
                key={i}
              >
                <Image
                  maxW={32}
                  transition={`all 200ms ease-in-out`}
                  border={clicked[a] ? `2px solid ${colors.highLightColor}` : 0}
                  src={avatars[a]}
                />
              </Box>
            ))}
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="orange" mr={3}>
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
