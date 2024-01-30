import { Heading } from "@chakra-ui/react";

import { homeTheme } from "@/config/colorTheme";

export default function CHeading({ title, size, cprops }) {

  let props = null

  if (size === 1) props = {
    ...homeTheme.c1Heading
  }
  if (size === 2) props = {
    ...homeTheme.c2Heading
  }
  if (size === 3) props = {
    ...homeTheme.c3Heading
  }
  if (!props)
    return null

  return <Heading{...props} {...cprops} > {title}</Heading >

}
