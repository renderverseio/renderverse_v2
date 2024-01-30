import { Box } from "@chakra-ui/react";
import { dynamicCardTheme, staticCardTheme, gridCardTheme } from "@/config/colorTheme";

export default function CCard({ props, type, children, animated }) {
  let cardProps = {}
  if (type === "d") cardProps = { ...dynamicCardTheme }
  if (type === "s") cardProps = { ...staticCardTheme }
  let animation = animated ? { ...gridCardTheme } : {}

  return <Box   {...cardProps} {...animation} {...props}> {children}</Box >
}
