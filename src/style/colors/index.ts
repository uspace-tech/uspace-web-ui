export const colorTokens = {
  colors: {
    text: {
      DEFAULT: { value: "#333333" },
      primary: { value: "#333333" },
      secondary: { value: "#748598" },
    },
    disabled: {
      DEFAULT: { value: "#BDC3D0" },
      grey: { value: "#BDC3D0" },
    },
    materialBg: { value: "#F3F4F9" },
    divider: { value: "rgba(0, 0, 0, 0.1)" },
    primary: { value: "#28292B" },
    blue: { value: "#0067D8" },
    green: { value: "#15DD73" },
    yellow: { value: "#E6A807" },
    red: { value: "#F45656" },
    white: { value: "#FFFFFF" },
  },
}

export const semanticTokens = {
  colors: {},
}

export const getAllColorKeys = () => {
  const colors = colorTokens.colors
  const keys: string[] = []

  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === "object" && "value" in value) {
      keys.push(key)
    } else {
      Object.keys(value).forEach((subKey) => {
        if (subKey === "DEFAULT") {
          keys.push(key)
        } else {
          keys.push(`${key}.${subKey}`)
        }
      })
    }
  })

  return keys
}
