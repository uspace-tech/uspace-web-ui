import { defineSlotRecipe } from "@chakra-ui/react"

/**
 * 期望樣子
 * <label>
 *   <input />
 *   <span>label</span>
 * </label>
 */
export const textFieldRecipe = defineSlotRecipe({
  className: "textField",
  slots: ["root", "input", "label", "clear"],
  base: {
    root: {
      display: "flex",
      position: "relative",
      width: "100%",
    },
    input: {
      background: "materialBg",
      focusRing: "inside",
      focusRingColor: "primary",
      focusRingWidth: "2px",

      width: "100%",
      height: "56px",

      borderRadius: "8px",

      pt: "24px",
      pr: "48px",
      pb: "8px",
      pl: "16px",

      textStyle: "notoP16",
      color: "text.primary",

      _focus: {
        _placeholder: {
          opacity: 1,
        },
      },

      _placeholder: {
        color: "text.secondary",
        opacity: 0,
        willChange: "opacity",
        transition: "opacity 0.05s ease-out",
      },
    },
    label: {
      position: "absolute",
      top: "8px",
      left: "16px",
      color: "text.secondary",
      textStyle: "notoP12",

      willChange: "top, font-size, line-height",
      transition: "top 0.15s linear, font-size 0.15s linear, line-height 0.15s linear",

      _peerPlaceholderShown: {
        top: "16px",
        textStyle: "notoP16",
      },

      _peerFocusVisible: {
        top: "8px",
        textStyle: "notoP12",
      },

      _required: {
        _after: {
          content: "'*'",
          color: "red",
          paddingLeft: "4px",
        },
      },
    },
    clear: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      right: "16px",
      zIndex: "1",

      borderRadius: "50%",
      padding: "4px",
      display: "block",

      transition: "background-color 0.15s ease-out",

      // _hover: {
      //   bg: "#00000015",
      // },

      _peerPlaceholderShown: {
        display: "none",
      },
    },
  },
})
