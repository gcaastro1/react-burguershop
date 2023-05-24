import { useContext } from 'react'
import { ProductsContext } from '../../../contexts/ProductsContext'
import { IProducts } from '../../../contexts/ProductsContext/types'
import { Button } from '../../Button/style'
import { MainCard } from './style'

export const ProductCard = ({ id, img, name, category, price }: IProducts) => {
  const { hadleAddToCart } = useContext(ProductsContext)

  const item = {
    id: id,
    price: price,
    count: 1,
    img: img,
    name: name,
    category: category,
  }

  return (
    <MainCard>
      <div className='imgContainer'>
        <img src={img} alt={name} />
      </div>
      <div className='infoContainer'>
        <h3>{name}</h3>
        <span>{category}</span>
        <p>R$ {price.toFixed(2).replace('.', ',')}</p>
        <Button variant='primaryDefault' onClick={(e) => hadleAddToCart(item)}>
          Adicionar
        </Button>
      </div>
    </MainCard>
  )
}
