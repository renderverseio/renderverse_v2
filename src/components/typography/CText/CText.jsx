import { Text } from "@chakra-ui/react";

import { homeTheme } from "@/config/colorTheme";

export default function CText({ title, size, cprops }) {

  let props = null

  if (size === 1) props = {
    ...homeTheme.c1Text
  }
  if (size === 2) props = {
    ...homeTheme.c2Text
  }
  if (size === 3) props = {
    ...homeTheme.c3Text
  }
  if (!props)
    return null

  return <Text{...props} {...cprops} >{title}</Text>
}
