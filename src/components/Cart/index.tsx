import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import { Button } from '../Button/style'
import { CartProduct } from '../Cards/CartCard'
import { CartBody, CartFooter, CartHeader } from './style'
import { IoMdClose } from 'react-icons/io'

export const Cart = () => {
  const { cart, toggleModal, clearCart } = useContext(ProductsContext)

  const total = cart.reduce((prev, curr) => prev + (curr.price * curr.count), 0)

  return (
    <>
      <CartHeader>
        <h4>Carrinho de Compras</h4>
        <Button variant='close' onClick={() => toggleModal()}>
          <IoMdClose />
        </Button>
      </CartHeader>
      <CartBody>
        {cart.map((item, index) => (
          <CartProduct
            key={index}
            id={item.id}
            img={item.img}
            name={item.name}
            category={item.category}
            price={item.price}
            count={item.count}
          />
        ))}

        <CartFooter>
          <div>
            <span>Total</span>
            <span className='total'>
              {total.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
          <Button variant='grayDefault' onClick={() => clearCart()}>
            Remover todos
          </Button>
        </CartFooter>
      </CartBody>
    </>
  )
}
