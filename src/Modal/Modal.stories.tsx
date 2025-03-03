import { Meta, StoryObj } from "@storybook/react"
import { Modal } from "./Modal"
import React from "react"

import image from "../assets/modal_default.png"
import { Button } from "../Button"
import { Stack } from "@chakra-ui/react"

const meta: Meta<typeof Modal> = {
  title: "UPSACE/Modal",
  component: Modal,
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {},
  render: (args) => {
    const [open, setOpen] = React.useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          {...args}
          open={open}
          title="USPACE地鎖廠"
          subtitle="台北市松山區南京東路 100號"
          text="請確認是否已停放好車輛，按下停放完成後將無法再次降鎖"
          imageUrl={image}
          onClose={() => setOpen(false)}
          action={
            <Stack gap={2}>
              <Stack direction="row" gap={2}>
                <Button level="secondary">取消</Button>
                <Button>確認</Button>
              </Stack>
              <Button level="negative">HELP</Button>
            </Stack>
          }
        />
      </>
    )
  },
}
