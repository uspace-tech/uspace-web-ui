"use client"

import React from "react"
import {
  createSlotRecipeContext,
  HTMLChakraProps,
  Portal,
  Presence,
  RecipeVariantProps,
  SlotRecipeProps,
  UnstyledProp,
} from "@chakra-ui/react"
import { modalRecipe } from "./modal.recipe"
import { MdClose, MdChevronLeft } from "react-icons/md"

const { withRootProvider, withContext, PropsProvider } = createSlotRecipeContext({
  recipe: modalRecipe,
})

interface ModalProviderProps extends SlotRecipeProps<"root">, UnstyledProp {
  children?: React.ReactNode
  value: {
    open: boolean
  }
}
export const ModalProvider = withRootProvider<ModalProviderProps>(PropsProvider)

interface ModalContainerProps extends HTMLChakraProps<"div", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalContainer = withContext<HTMLDivElement, ModalContainerProps>("div", "container")

interface ModalRootProps extends React.PropsWithChildren<ModalProviderProps["value"]>, UnstyledProp {}
export const ModalRoot = (props: ModalRootProps) => {
  const { children, unstyled, ...restProps } = props

  return (
    <ModalProvider unstyled={unstyled} value={{ ...restProps }}>
      <Portal>{children}</Portal>
    </ModalProvider>
  )
}

interface ModalBackdropProps extends HTMLChakraProps<"div", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalBackdrop = withContext<HTMLDivElement, ModalBackdropProps>("div", "backdrop")

interface ModalContentProps extends HTMLChakraProps<"div", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalContent = withContext<HTMLDivElement, ModalContentProps>("div", "content")

interface ModalHeaderProps extends HTMLChakraProps<"div", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalHeader = withContext<HTMLDivElement, ModalHeaderProps>("div", "header")

interface ModalBodyProps extends HTMLChakraProps<"div", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalBody = withContext<HTMLDivElement, ModalBodyProps>("div", "body")

interface ModalFooterProps extends HTMLChakraProps<"div", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalFooter = withContext<HTMLDivElement, ModalFooterProps>("div", "footer")

interface ModalTitleProps extends HTMLChakraProps<"h2", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalTitle = withContext<HTMLHeadingElement, ModalTitleProps>("h2", "title")

interface ModalSubtitleProps extends HTMLChakraProps<"h3", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalSubtitle = withContext<HTMLHeadingElement, ModalSubtitleProps>("h3", "subtitle")

interface ModalTextProps extends HTMLChakraProps<"p", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalText = withContext<HTMLParagraphElement, ModalTextProps>("p", "text")

interface ModalIconProps extends HTMLChakraProps<"span", RecipeVariantProps<typeof modalRecipe>> {}
export const ModalIcon = withContext<HTMLSpanElement, ModalIconProps>("span", "icon")

interface ModalProps {
  open: boolean
  title?: string
  subtitle?: string
  text?: string
  imageUrl?: string
  headerProps?: React.ComponentProps<typeof ModalHeader>
  bodyProps?: React.ComponentProps<typeof ModalBody>
  children?: React.ReactNode
  action?: React.ReactNode
  onClose: () => void
  onPrevStep?: () => void
}
/**
 * 符合設計需求的Modal
 * - 上方操作按鈕 上一步 與 關閉
 * - 上方圖片
 * - 中間文字內容
 * - 文字內容與按鈕空間之間的洞 （有提供 `children` 空間，自行發揮）
 * - 下方按鈕空間 （不包含按鈕 自行發揮）
 */
export const Modal = (props: ModalProps) => {
  const { open, title, subtitle, text, imageUrl, headerProps, bodyProps, children, action, onClose, onPrevStep } = props

  const handlePrevStep = () => {
    onPrevStep?.()
  }

  const handleClose = () => {
    onClose?.()
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onClose?.()
  }

  return (
    <ModalRoot open={open}>
      <Presence present={open} animationName={{ _open: "fade-in", _closed: "fade-out" }} animationDuration="moderate">
        <ModalBackdrop onClick={handleBackdropClick} />
      </Presence>

      <Presence
        position="fixed"
        present={open}
        bottom="0"
        insetX="0"
        zIndex="modal"
        animationName={{ _open: "slide-from-bottom-full", _closed: "slide-to-bottom-full" }}
        animationDuration="moderate"
      >
        <ModalContent>
          <ModalHeader {...headerProps} data-img={Boolean(imageUrl)} {...(imageUrl && { backgroundImage: `url(${imageUrl})` })}>
            {onPrevStep && (
              <ModalIcon onClick={handlePrevStep}>
                <MdChevronLeft />
              </ModalIcon>
            )}
            <div style={{ flex: 1 }} />
            <ModalIcon onClick={handleClose}>
              <MdClose />
            </ModalIcon>
          </ModalHeader>
          <ModalBody {...bodyProps}>
            {title && <ModalTitle>{title}</ModalTitle>}
            {subtitle && <ModalSubtitle>{subtitle}</ModalSubtitle>}
            {text && <ModalText>{text}</ModalText>}
            {children}
          </ModalBody>
          <ModalFooter>{action}</ModalFooter>
        </ModalContent>
      </Presence>
    </ModalRoot>
  )
}
