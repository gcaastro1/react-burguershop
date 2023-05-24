import { useContext, useState } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import { Button } from "../Button/style"
import { Cart } from "../Cart"
import { StyledModal } from "./styles"

export const ModalBody = () => {

  const { isOpen, toggleModal } = useContext(ProductsContext)
  
  return(
    <StyledModal
    isOpen={isOpen}
    onBackgroundClick={toggleModal}
    onEscapeKeydown={toggleModal}
    >
    <Cart />
    </StyledModal>
  )
}