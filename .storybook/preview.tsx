import React from "react"
import type { Preview } from "@storybook/react"
import { Title, Subtitle, Description, Primary, Controls, Stories } from "@storybook/blocks"
import { Provider } from "../src/Provider"

const preview: Preview = {
  parameters: {
    doc: {
      toc: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider defaultTheme="light">
        <Story />
      </Provider>
    ),
  ],
  tags: ["autodocs"],
}

export default preview
