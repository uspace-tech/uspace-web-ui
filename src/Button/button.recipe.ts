import { defineRecipe } from "@chakra-ui/react"

export const buttonRecipe = defineRecipe({
  base: {
    width: "100%",
    height: "56px",
    minWidth: "72px",
    px: "5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",

    borderRadius: "8px",
    textStyle: "notoH16",
    _disabled: {
      cursor: "not-allowed",
    },
  },
  variants: {
    level: {
      primary: {
        bg: "primary",
        color: " white",
        _disabled: {
          bg: "disabled.grey",
          color: "white",
        },
      },
      secondary: {
        bg: "materialBg",
        color: "text.primary",
        _disabled: {
          bg: "disabled.grey",
          color: "white",
        },
      },
      negative: {
        bg: "transparent",
        color: "text.primary",
        textDecoration: "underline",
        _disabled: {
          bg: "transparent",
          color: "disabled.grey",
        },
      },
      dangerous: {
        bg: "transparent",
        color: "red",
        textDecoration: "underline",
      },
    },
  },
  defaultVariants: {
    level: "primary",
  },
})
