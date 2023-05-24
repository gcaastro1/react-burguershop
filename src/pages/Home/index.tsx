import { ModalBody } from '../../components/Modal'
import { List } from '../../components/List'
import { Header } from '../../components/Navbar'
import { ProductsProvider } from '../../contexts/ProductsContext'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import Modal from 'styled-react-modal'

export const Home = () => {
  const { user, globalLoading } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    
    if(user.length != 1){
      navigate('/')
    }
  }, [globalLoading])

  return (
    <ProductsProvider>
      <Header />
      <ModalBody />
      <List />
    </ProductsProvider>
  )
}
