import Navbar from "@/components/common/Navbar/Navbar";
import CHeading from "@/components/typography/CHeading/CHeading";
import CText from "@/components/typography/CText/CText";
import { gradientBgs } from "@/data/home/homeData";
import { Box, Flex, Grid } from "@chakra-ui/react";

export default function Revshare() {
  return (
    <Box>
      <Navbar />
      <Grid py={12} rowGap={"3rem"}>
        <Grid px={6} rowGap={"1rem"}>
          <CHeading size={1} title={`Wave goodbye to gas fees.`} />
          <CText
            size={2}
            title={`With $RDAI's new revenue sharing solution, you will be airdropped as long as you prove ownership of your $RDAI tokens.`}
          />
          <CText
            size={2}
            title={`All $RDAI holders are eligible for the program and you pay no fees at any point, nor send your tokens. Designed with security & adaptability in mind, experience the PaLM AI Team's version of easy revenue share.`}
          />
        </Grid>

        <Flex px={6}>
          <Grid rowGap={"1rem"}>
            <Box textAlign={"center"}>
              <CHeading size={1} title={`$200,000`} />
              <CText size={2} title={`Revenue To be Distributed`} />
            </Box>
            
          </Grid>
        </Flex>

        <Box textAlign={"center"}>
          <Flex
            p={8}
            flexDir={"column"}
            justifyContent="center"
            alignItems="center"
            rowGap={"2rem"}
            bgImg={gradientBgs[3].bgImg}
          >
            <Box textAlign={"center"}>
              <CHeading size={3} cprops={{
                    color: "black",
                  }} title={`Join the Revenue Share Program`} />
              <CText
                size={3}
                title={`Please read the following instructions carefully to join the program. Only for $RDAI holders.`}
              />
            </Box>
            <Flex>
              <Box
                className="btn btn-2"
                borderRadius={"lg"}
                boxShadow="lg"
                p={3}
              >
                Join The Program
              </Box>
            </Flex>
          </Flex>
          <CText
            size={3}
            title={`Please connect your wallet to view balance & join the program.`}
          />
        </Box>

        <Flex px={6}>
          <Grid>
            <Box my={4}>
              <CHeading size={1} title={`FAQ`} />
            </Box>
            <Grid rowGap={"1rem"}>
              {faqs.map((faq, i) => (
                <Box display={"grid"} key={i}>
                  <CText
                    cprops={{ color: "green.700" }}
                    size={2}
                    title={`Q : ${faq.q}`}
                  />
                  <CText size={2} title={`A : ${faq.a}`} />
                </Box>
              ))}
            </Grid>
          </Grid>
        </Flex>
      </Grid>
    </Box>
  );
}

const faqs = [
  {
    q: "How often is the Revenue Share distributed?",
    a: "Every 2 to 4 weeks without announcement.",
  },
  {
    q: "How do I check up my status or eligibility?",
    a: "The dashboard is designed to keep you informed. You can see your latest estimated rewards and historical data.",
  },
  {
    q: "I was disqualified for breaking the Terms - what can I do?",
    a: "If you believe you were disqualified by mistake, please contact us on our official Telegram group or X.",
  },
  {
    q: "The chances for this are however very slim. The entire program is automated and relies on leading blockchain data providers.",
    a: "We will not be able to provide you with assistance if you have been disqualified on legitimate grounds.",
  },
  {
    q: "I can't connect my wallet or see my data - what can I do?",
    a: "Use the Cold Wallet option to manually connect your wallet in emergency situations only, as this does not provide full user experience.\n Contact us for help if the issue persists. Be sure to note that on browsers where Metamask cannot be installed, you can use WalletConnect to connect to it nevertheless.",
  },
];
