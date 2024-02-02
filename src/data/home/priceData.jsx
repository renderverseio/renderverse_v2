import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { Flex, Text } from "@chakra-ui/react";

function HeaderBuilder({ type, icon, price, button }) {
  return <Flex justifyContent={"center"} alignItems={"center"} flexDir={"column"}>
    <CText title={type} size={2} />
    <CHeading title={price} size={2} />
  </Flex>

}
export const pricingData = [
  {
    header: <>hello</>,
    td1:
      <HeaderBuilder
        type="free"
        price={"0$"}
        icon="icon"

      />,
    td2:
      <HeaderBuilder
        type="free"
        price={"10$"}
        icon="icon"
      />,
    td3:
      <HeaderBuilder
        type="free"
        price={"20$"}
        icon="icon"
      />,
    td4:
      <HeaderBuilder
        type="free"
        price={"40$"}
        icon="icon"
      />,
  },
  {
    header: "Dashboard",
    heading: true
  },
  {
    header: "Image Upload",
    td1: <>-</>,
    td2: <>100Mb</>,
    td3: <>1GB</>,
    td4: <>5GB</>,
  },
  {
    header: "Snap Storage limit",
    td1: <>3</>,
    td2: <>500Mb</>,
    td3: <>Unlimited</>,
    td4: <>Unlimited</>,
  },
  {
    header: "Folder Storage limit",
    td1: <>0</>,
    td2: <>0</>,
    td3: <>Unlimited</>,
    td4: <>Unlimited</>,
  },
  {
    header: "Folder Storage limit",
    td1: <>0</>,
    td2: <>0</>,
    td3: <>Unlimited</>,
    td4: <>Unlimited</>,
  },
  {
    header: "Sync snaps and folders",
    td1: <>0</>,
    td2: <>0</>,
    td3: <>Unlimited</>,
    td4: <>Unlimited</>,
  },
  {
    header: "Collabration",
    heading: true
  },
  {
    header: "Team members",
    td1: <>1</>,
    td2: <>2</>,
    td3: <>4</>,
    td4: <>16</>,
  },
  {
    header: "API",
    heading: true
  },
  {
    header: "Simple Snap Calls",
    td1: <>50/month</>,
    td2: <>1000/month</>,
    td3: <>5000/month</>,
    td4: <>10000/month</>,
  },

  {
    header: "Video Export",
    heading: true
  },

  {
    header: "Framerate",
    td1: <>30fps</>,
    td2: <>30fpx</>,
    td3: <>60fps</>,
    td4: <>60fps</>,
  },
  {
    header: "Scale",
    td1: <>1</>,
    td2: <>1</>,
    td3: <>2</>,
    td4: <>4</>,
  },
  {
    header: "MP4 Support",
    td1: <>t</>,
    td2: <>t</>,
    td3: <>t</>,
    td4: <>t</>,
  },
  {
    header: "GIF Support",
    td1: <>g</>,
    td2: <>g</>,
    td3: <>g</>,
    td4: <>g</>,
  }
]
