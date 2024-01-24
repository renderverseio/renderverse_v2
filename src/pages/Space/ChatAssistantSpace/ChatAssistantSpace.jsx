import axios from "axios";

import { Box, Button, Flex } from "@chakra-ui/react";

import { bsc } from "wagmi/chains";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";

import { FaForward, FaUser } from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";
import DescriptionBox from "@/components/spaces/DescriptionBox";
import PrevChatsComponent from "@/components/spaces/chatAssitantSpace/PrevChatsComponents";
import ChatComponent from "@/components/spaces/chatAssitantSpace/ChatComponent";
import ChatAssistants from "@/components/spaces/chatAssitantSpace/ChatAssistants";
import { spacesRequests } from "@/requests/spaces/SpacesRequests";

// import SpaceNavbar from "../../components/spaces/SpaceNavbar";
// import ConnectWalletButton from "../../components/common/ConnectWalletButton";
// import ChatAssistantHistoryDialog from "../../components/spaces/chatAssitantSpace/ChatAssitantHistoryDialog";

// import BG from "/public/bg/16.jpg";

export default function ChatAssistantSpace() {
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

  useEffect(() => {
    setChats([]);
    setChatHistory([]);
    setShowChat(false);
  }, []);

  const [input, setInput] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [promp, setPromp] = useState([]);
  const [person, setPerson] = useState("Elon Musk");
  const [isSelected, setIsSelected] = useState(false);
  const [index, setIndex] = useState(0);
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
  }, [promp, input, isSelected]);

  async function generateMusic() {
    if (!loaded) {
      setLoaded(true);
      setPromp([...promp, input]);
      const response = await spacesRequests.generateChatPrompt({
        question: input,
        person: person,
        walletAddress: address,
        wallet_address: address,
      });
      setPromp([...promp, input, response.data.ans]);
      setInput("");
      setLoaded(false);
    }
  }

  useEffect(() => {
    const response = spacesRequests.generatedChats({ address });
    const chats = response.data.generatedImages;
    let months = [];
    for (let i = 0; i < chats.length; i++) {
      const month = new Date(chats[i].createdAt).getUTCMonth() - 1;
      months.push(month);
    }
    months = [...new Set(months)];
    setChatHistory(months);
    setChats([...chats]);
  }, [address, isConnected]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Box ref={ref}>
        {/* <ChatAssistantHistoryDialog modalIsOpen={modalIsOpen}
        m={m}
        namedMonths={namedMonthsData}
        isConnected={isConnected}
        showChat={showChat}
        viewHistory={viewHistory}
        setModalIsOpen={setModalIsOpen}
      /> */}
        {/* <SpaceNavbar
        disconnect={() => disconnect()}
        balance={balanceFeteched ? balance.formatted : ""}
        address={address ? address : ""}
        isConnected={isConnected}
      /> */}

        <Box pos="relative">
          <DescriptionBox
            title={`👨🏻‍🎤 ChatGPT Assistant 👨🏻‍🎤`}
            desc={`AI Assistant powered By ${person}`}
          />
          {isSelected && (
            <Flex mt={12} justifyContent={"center"} mb={8}>
              <Button
                onClick={() => {
                  setIsSelected(false);
                  setPromp([]);
                }}
              >
                Change AI Assitant
              </Button>
            </Flex>
          )}
          {!isSelected && (
            <ChatAssistants
              setPerson={setPerson}
              setIndex={setIndex}
              input={input}
              setInput={setInput}
              setIsSelected={setIsSelected}
              generatePrompt={generateMusic}
            />
          )}
          {isConnected && (
            <ChatComponent promp={promp} loaded={loaded} person={person} />
          )}
          {!isConnected && (
            <Flex mt={12} justifyContent={"center"}>
              <ConnectWalletButton
                onClick={connectWallet}
                title="Connect Wallet"
              />
            </Flex>
          )}
        </Box>
        <PrevChatsComponent
          chatHistory={chatHistory}
          setModalIsOpen={setModalIsOpen}
          setShowChat={setShowChat}
          getMonthChats={getMonthChats}
        />
      </Box>
    </React.Fragment>
  );
}
