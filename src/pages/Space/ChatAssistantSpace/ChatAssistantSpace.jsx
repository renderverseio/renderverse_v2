import { Box, Button, Flex } from "@chakra-ui/react";


import React, { useRef, useState, useEffect } from "react";

import { spacesRequests } from "@/requests/spaces/SpacesRequests";

import ChatComponent from "@/components/spaces/chatAssitantSpace/ChatComponent";
import DescriptionBox from "@/components/spaces/DescriptionBox";
import ChatAssistants from "@/components/spaces/chatAssitantSpace/ChatAssistants";
import PrevChatsComponent from "@/components/spaces/chatAssitantSpace/PrevChatsComponents";
import ChatAssistantHistoryDialog from "@/components/spaces/chatAssitantSpace/ChatAssitantHistoryDialog";

import { useWallet } from "@/hooks/common/useWallet";



export default function ChatAssistantSpace() {
  const { address, connectWallet, isConnected, disconnect } = useWallet()

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);
  const [chatPrompts, setChatPrompts] = useState([]);
  const [assistant, setAssistant] = useState("Elon Musk");
  const [isAssistantSelected, setIsAssistantSelected] = useState(false);
  const [assistantIndex, setAssistantIndex] = useState(0);

  const [m, setM] = useState(0);
  const ref = useRef();

  const [chats, setChats] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [viewHistory, setViewHistory] = useState([]);

  function getMonthChats(n) {
    setM(n);
    const monthChats = [];
    for (let i = 0; i < chats.length; i++) {
      const month = new Date(chats[i].createdAt).getUTCMonth() - 1;
      if (n === month) {
        monthChats.push(chats[i]);
      }
      setViewHistory([...monthChats]);
    }
  }

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [chatPrompts, input, isAssistantSelected]);

  async function generateChatPrompt() {
    console.log(input, assistant, address)
    try {
      if (!typing) {
        setTyping(true);
        setChatPrompts([...chatPrompts, input]);
        const response = await spacesRequests.generateChatPrompt({
          input,
          person: assistant,
          address
        });
        setChatPrompts([...chatPrompts, input, response.data.ans]);
        setInput("");
        setTyping(false);
      }
    } catch (err) {
      console.log(err)
      setTyping(false);
    }
  }

  useEffect(() => {
    const getChats = async () => {
      if (isConnected) {
        try {
          const response = await spacesRequests.generatedChats({ address });
          const chats = response.data.generatedImages;
          let months = [];
          for (let i = 0; i < chats.length; i++) {
            const month = new Date(chats[i].createdAt).getUTCMonth() - 1;
            months.push(month);
          }
          months = [...new Set(months)];
          setChatHistory(months);
          setChats([...chats]);
        } catch (error) {
          console.log(error)
        }
      }

    };
    getChats()
  }, [address, isConnected]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      <ChatAssistantHistoryDialog
        modalIsOpen={modalIsOpen}
        m={m}
        isConnected={isConnected}
        showChat={showChat}
        viewHistory={viewHistory}
        setModalIsOpen={setModalIsOpen}
      />
      {/* <SpaceNavbar
        disconnect={() => disconnect()}
        balance={balanceFeteched ? balance.formatted : ""}
        address={address ? address : ""}
        isConnected={isConnected}
      /> */}

      <Box ref={ref} pos="relative">
        <DescriptionBox
          title={`👨🏻‍🎤 ChatGPT Assistant 👨🏻‍🎤`}
          desc={`AI Assistant powered By ${assistant}`}
        />
        {isConnected && <Flex rowGap={"2rem"} flexDir={"column"}>
          {!isAssistantSelected && (
            <ChatAssistants
              setAssistantIndex={setAssistantIndex}
              setIsAssistantSelected={setIsAssistantSelected}
              setAssistant={setAssistant}
            />
          )}
          {isAssistantSelected && (
            <Box>
              <Flex mt={6}>
                <Button
                  onClick={() => {
                    setIsAssistantSelected(false);
                    setChatPrompts([]);
                  }}
                >
                  Change AI Assitant
                </Button>
              </Flex>
              <ChatComponent input={input}
                setInput={setInput}
                setAssistantIndex={setIsAssistantSelected}
                generateChatPrompt={generateChatPrompt}
                chatPrompts={chatPrompts}
                typing={typing}
                assistant={assistant}
              />
            </Box>
          )}
          <PrevChatsComponent
            chatHistory={chatHistory}
            viewHistory={viewHistory}
            setModalIsOpen={setModalIsOpen}
            setShowChat={setShowChat}
            getMonthChats={getMonthChats}
          />
        </Flex>}
        <Box mt={12}>
          {!isConnected && <Flex justifyContent={"center"}>
            <Button onClick={connectWallet}>
              Connect Wallet
            </Button>
          </Flex>
          }
          {isConnected && <Flex justifyContent={"center"}>
            <Button onClick={disconnect}>
              Disconnect
            </Button>
          </Flex>
          }
        </Box>
      </Box>
    </React.Fragment >
  );
}
