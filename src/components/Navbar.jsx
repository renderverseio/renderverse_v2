import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.svg";
import MobileDropDown from "./MobileDropDown";
import Poper from "./Popper";

export default function Navbar() {
  const menuItems = [
    {
      menu: "Pricing",
      options: [],
    },
    {
      menu: "Use Cases",
      options: [
        {
          icon: "",
          title: "Art Generator",
          subText: "Create Smooth slides with smooth animations",
        },
        {
          icon: "",
          title: "AI Trading tools",
          subText: "Take your social media presence to next level",
        },
        {
          icon: "",
          title: "CryptoGPT extensions",
          subText: "Help your students to grasp complex concepts easily",
        },
        {
          icon: "",
          title: "Inference Models",
          subText: "Interactive Infographics on your website / blog",
        },
      ],
    },
    {
      menu: "Products",
      options: [
        {
          icon: "",
          title: "Spaces",
          subText: "Create Smooth slides with smooth animations",
        },
        {
          icon: "",
          title: "Models",
          subText: "Take your social media presence to next level",
        },
        {
          icon: "",
          title: "API",
          subText: "Help your students to grasp complex concepts easily",
        },
        {
          icon: "",
          title: "GPU Infrastructure",
          subText: "Interactive Infographics on your website / blog",
        },
        {
          icon: "",
          title: "Plugins",
          subText: "Interactive Infographics on your website / blog",
        },
        {
          icon: "",
          title: "Extensions Content",
          subText: "Interactive Infographics on your website / blog",
        },
      ],
    },
    {
      menu: "Resources",
      options: [
        {
          icon: "",
          title: "Blog",
          subText: "Create Smooth slides with smooth animations",
        },
        {
          icon: "",
          title: "Documentation",
          subText: "Take your social media presence to next level",
        },
        {
          icon: "",
          title: "Tutorials",
          subText: "Help your students to grasp complex concepts easily",
        },
        {
          icon: "",
          title: "userstories",
          subText: "Interactive Infographics on your website / blog",
        },
        {
          icon: "",
          title: "changelong",
          subText: "Interactive Infographics on your website / blog",
        },
      ],
    },
    {
      menu: "Socials",
      options: [
        {
          icon: "",
          title: "Twitter",
          subText: "",
        },
        {
          icon: "",
          title: "Telegram",
          subText: "",
        },
        {
          icon: "",
          title: "Discord",
          subText: "",
        },
        {
          icon: "",
          title: "Email",
          subText: "",
        },
      ],
    },
  ];
  return (
    <Box minH={{ base: "10vh" }}>
      <Flex
        py={4}
        px={{ base: 4, md: 8, lg: 12, xl: 24 }}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          w="50%"
          columnGap={".5rem"}
          alignItems={"center"}
          justifyContent="flex-start"
        >
          <Image src={Logo} /> <Heading color={`gray.900`}>Renderverse</Heading>{" "}
        </Flex>
        <Box
          w={{ base: "auto", md: "none" }}
          display={{ base: "block", md: "none" }}
        >
          <MobileDropDown />
        </Box>
        <Box w="100%" display={{ base: "none", md: "block" }}>
          <Flex
            justifyContent={"center"}
            alignItems="center"
            columnGap={"1rem"}
          >
            {menuItems.map((menu, i) => (
              <Box
                justifyContent={"center"}
                alignItems="center"
                display={"flex"}
                key={i}
                cursor="pointer"
              >
                <Poper menu={menu.menu} options={menu.options} />
                {i !== menuItems.length - 1 ? (
                  <Box
                    marginLeft={"1rem"}
                    minH="12px"
                    maxH="12px"
                    borderLeft={"2px solid gray"}
                  ></Box>
                ) : null}
              </Box>
            ))}
          </Flex>
        </Box>
        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent={"flex-end"}
          w="50%"
          alignItems="center"
          columnGap={"1rem"}
        >
          <Button>Connect Wallet</Button>
        </Flex>
      </Flex>
    </Box>
  );
}
