import CHeading from "@/components/typography/CHeading/CHeading";
import { Flex, Icon } from "@chakra-ui/react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

export default function Back() {
  const navigate = useNavigate();
  return (
    <Flex>
      <Flex
        display={"flex"}
        p={2}
        boxShadow="lg"
        bg="gray.100"
        cursor={"pointer"}
        onClick={() => navigate("/dapp/products")}
        border="2px"
        borderColor="white"
        color="gray.600"
        borderRadius={"lg"}
        alignItems="center"
        columnGap={"1rem"}
      >
        <Icon h={12} w={12} as={IoArrowBackCircleOutline} />
        <CHeading size={3} title={`Back`} />
      </Flex>
    </Flex>
  );
}
