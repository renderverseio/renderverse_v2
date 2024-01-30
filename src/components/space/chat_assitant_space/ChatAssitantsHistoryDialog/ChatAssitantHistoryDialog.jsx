import { namedMonthsData } from "@/data/spaces/chatAssitantData";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { FaRobot, FaUser } from "react-icons/fa";


const ChatAssistantHistoryDialog = ({
  modalIsOpen,
  setModalIsOpen,
  m,
  isConnected,
  showChat,
  viewHistory
}) => {
  return (
    <Modal
      size="fullscreen"
      isOpen={modalIsOpen}
      onClose={() => setModalIsOpen(false)}
    >
      <ModalOverlay />
      <ModalContent py={4}>
        <ModalHeader mt={4}>
          <Text
            my={4}
            p={3}
            borderRadius="md"
            fontWeight={"bold"}
            fontSize={{ base: "3xl" }}
          >
            {namedMonthsData[m]} Chats
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            {isConnected && showChat ? (
              <Box my={5} px={4} pt={4} display={"flex"} flexDirection="column">
                {viewHistory.map((p, i) => (
                  <Box
                    key={i}
                    display="flex"
                    columnGap={"2rem"}
                    flexDirection={"column"}
                  >
                    <Box
                      my={4}
                      borderRadius={"lg"}
                      boxShadow={"lg"}
                      border={"1px"}
                      py={2}
                      w='66%'
                      display={"flex"}
                      alignItems={"center"}
                      px={4}

                    >
                      <FaUser size={32} />
                      <Text
                        px={4}
                        borderRadius="md"
                        fontSize={{ base: "sm" }}
                      >
                        {p.question}
                      </Text>
                    </Box>
                    <Box
                      borderRadius={"lg"}
                      my={4}
                      boxShadow={"lg"}
                      border={"1px"}
                      py={2}
                      w='66%'
                      mx="auto"
                      display={"flex"}
                      justifyContent={"flex-end"}
                      alignItems={"center"}
                      px={4}
                    >
                      <Text
                        px={2}
                        w="80%"
                        borderRadius="md"
                        textAlign="right"
                        fontSize={{ base: "sm" }}
                      >
                        {p.anwser}
                      </Text>

                      <FaRobot size={32} />
                    </Box>
                  </Box>
                ))}
              </Box>
            ) : null}
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => setModalIsOpen(false)}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default ChatAssistantHistoryDialog
