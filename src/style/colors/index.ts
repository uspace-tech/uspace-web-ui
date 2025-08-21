export const colorTokens = {
  colors: {
    _text: {
      _DEFAULT: { value: "#333333" },
      _primary: { value: "#333333" },
      _secondary: { value: "#748598" },
      _secondaryDark: { value: "#CCCCCC" },
    },
    _disabled: {
      _DEFAULT: { value: "#BDC3D0" },
      _grey: { value: "#BDC3D0" },
    },
    _materialBg: { value: "#F3F4F9" },
    _materialBgDark: { value: "#484848" },
    _divider: { value: "rgba(0, 0, 0, 0.1)" },
    _primary: { value: "#28292B" },
    _blue: { value: "#0067D8" },
    _green: { value: "#15DD73" },
    _yellow: { value: "#E6A807" },
    _red: { value: "#F45656" },
    _white: { value: "#FFFFFF" },
  },
}

export const semanticTokens = {
  colors: {
    text: {
      primary: { value: { base: "{colors._text._primary}", _dark: "{colors._white}" } },
      secondary: { value: { base: "{colors._text._secondary}", _dark: "{colors._text._secondaryDark}" } },
    },
    disabled: {
      DEFAULT: { value: "{colors._disabled._DEFAULT}" },
      grey: { value: "{colors._disabled._grey}" },
    },
    materialBg: { value: { base: "{colors._materialBg}", _dark: "{colors._materialBgDark}" } },
    divider: { value: "{colors._divider}" },
    primary: { value: "{colors._primary}" },
    blue: { value: "{colors._blue}" },
    green: { value: "{colors._green}" },
    yellow: { value: "{colors._yellow}" },
    red: { value: "{colors._red}" },
    white: { value: "{colors._white}" },
  },
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
