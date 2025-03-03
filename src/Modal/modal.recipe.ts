import { defineSlotRecipe } from "@chakra-ui/react"

export const modalRecipe = defineSlotRecipe({
  className: "modal",
  slots: ["container", "backdrop", "content", "header", "body", "footer", "title", "subtitle", "text", "icon"],
  base: {
    backdrop: {
      position: "fixed",
      inset: 0,
      bg: "rgba(0, 0, 0, 0.4)",
      zIndex: "modal",
    },
    content: {
      width: "100%",
      backgroundColor: "white",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
      boxShadow: "0px -2px 6px 1px rgba(0, 0, 0, 0.12)",
      overflow: "hidden",
    },
    header: {
      padding: "16px 16px 8px 16px",
      color: "blue",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",

      "&[data-img=true]": {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "50vw",
        marginBottom: "16px",
      },
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      backgroundColor: "materialBg",
      borderRadius: "50%",
      fontSize: "24px",
      color: "primary",
    },
    body: {
      padding: "0px 16px",
      marginBottom: "8px",
    },
    footer: {
      padding: "16px",
    },
    title: {
      textStyle: "notoH24",
      color: "text.primary",
      marginBottom: "2px",
    },
    subtitle: {
      textStyle: "notoP16",
      color: "text.secondary",
    },
    text: {
      marginTop: "8px",
      textStyle: "notoP16",
      color: "text.secondary",
    },
  },
})
