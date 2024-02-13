export const dynamicCardTheme = {
  bg: "gray.200",
  boxShadow: "md",
  borderRadius: "md",
  cursor: "pointer",
  transition: "all 300ms ease-in-out",
  _hover: {
    boxShadow: "lg",
    borderRadius: "lg",
    bg: "gray.50",
  },
};

export const gridCardTheme = {
  _hover: {
    transform: `scale(1.03)`,
  },
};

export const staticCardTheme = {
  bg: "white.900",
  boxShadow: "lg",
  borderRadius: "lg",
  cursor: "pointer",
};

export const homeTheme = {
  c1Heading: {
    fontWeight: "700",
    color: "gray.900",
    fontSize: {
      base: "4xl",
      lg: "3.5rem",
    },
  },
  c2Heading: {
    fontWeight: "600",
    color: "gray.700",
    fontSize: {
      base: "lg",
      sm: "xl",
      md: "2xl",
      lg: "3xl",
      xl: "4xl",
    },
  },
  c3Heading: {
    fontWeight: "500",
    color: "gray.500",
    fontSize: {
      base: "md",
      sm: "lg",
      md: "xl",
      lg: "2xl",
    },
  },
  c1Text: {
    fontWeight: "500",
    color: "gray.900",
    fontSize: {
      base: "md",
      md: "lg",
      lg: "xl",
      xl: "2xl",
    },
  },
  c2Text: {
    fontWeight: "400",
    color: "gray.700",
    fontSize: {
      base: "sm",
      md: "md",
      lg: "lg",
      xl: "xl",
    },
  },
  c3Text: {
    fontWeight: "300",
    color: "gray.700",
    fontSize: {
      base: "xs",
      md: "sm",
      lg: "md",
    },
  },
};
