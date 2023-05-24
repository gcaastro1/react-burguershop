import { ICartProducts } from '../../../contexts/ProductsContext/types'
import { Button } from '../../Button/style'
import { CartButtons, CartCard } from './style'
import { IoMdTrash } from 'react-icons/io'
import { useContext } from 'react'
import { ProductsContext } from '../../../contexts/ProductsContext'

export const CartProduct = ({
  id,
  img,
  name,
  category,
  price,
  count,
}: ICartProducts) => {
  const { removeFromCart, handleIncrementCount, handleDecrementCount } = useContext(ProductsContext)

  const item = {
    id: id,
    price: price,
    count: count,
    img: img,
    name: name,
    category: category,
  }

  return (
    <CartCard>
      <div className='productContainer'>
        <img src={img} alt={name} />
        <div className='productInfo'>
          <h4>{name}</h4>
          <CartButtons>
            <Button variant='cartIcon' onClick={() => handleDecrementCount(item)}> - </Button>
            <span>{count}</span>
            <Button variant='cartIcon' onClick={() => handleIncrementCount(item)}> + </Button>
          </CartButtons>
        </div>
      </div>
      <Button variant='icon' onClick={(e) => removeFromCart(item)}>
        <IoMdTrash />
      </Button>
    </CartCard>
  )
}
