import { useContext } from 'react'
import { ProductsContext } from '../../contexts/ProductsContext'
import { Container } from '../../styles/global'
import { ProductCard } from '../Cards/ProductCard'
import { ListContainer } from './style'

export const List = () => {
  const { filteredProducts } = useContext(ProductsContext)

  return (
    <Container>
      <ListContainer>
        {filteredProducts.map((item, index) => (
          <ProductCard
            key={index}
            img={item.img}
            name={item.name}
            category={item.category}
            price={item.price}
            id={item.id}
          />
        ))}
      </ListContainer>
    </Container>
  )
}
