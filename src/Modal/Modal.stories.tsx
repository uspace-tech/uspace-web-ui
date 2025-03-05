import { Meta, StoryObj } from "@storybook/react"
import { Modal } from "./Modal"
import React from "react"

import image1 from "../assets/modal_default.png"
import image2 from "../assets/modal_default2.png"
import { Button } from "../Button"
import { Stack } from "@chakra-ui/react"

const meta: Meta<typeof Modal> = {
  title: "UPSACE/Modal",
  component: Modal,
  argTypes: {
    imageUrl: { control: "text", description: "圖片 URL" },
    headerProps: { control: "object", description: "header 的為上方留白/圖片空間" },
    children: { description: "text 與 action 之間的空間" },
    action: { description: "提供按鈕放置的空間，非必要" },
    onClose: { control: false, description: "關閉 modal 的 callback" },
    onPrevStep: { control: false, description: "上一頁的 callback，有帶入時左上會顯示按鈕" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

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
          // imageUrl={image1}
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

export const WithImage: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "含上方圖片（預設滿版）",
      },
    },
  },
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
          imageUrl={image1}
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

export const WithSmallImage: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "含上方圖片（圖片若非滿版需自行調整 `headerProps` 的 `backgroundSize` 可參考MDN）",
      },
    },
  },
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
          imageUrl={image2}
          headerProps={{
            backgroundSize: "50%",
          }}
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
