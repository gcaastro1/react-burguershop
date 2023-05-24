import { Navbar, SearchContainer, SearchModal } from './style'
import { Container } from '../../styles/global'
import Logo from '../../assets/logo.svg'
import { BiExit } from 'react-icons/bi'
import { HiShoppingCart } from 'react-icons/hi'
import { IoMdSearch, IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Button } from '../Button/style'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { ProductsContext } from '../../contexts/ProductsContext'
import { InputSearch } from '../Input'

export const Header = () => {
  const { userLogout } = useContext(UserContext)
  const { toggleModal, cart, handleSearchInput, searchInput } =
    useContext(ProductsContext)

  return (
    <Navbar>
      <Container>
        <img src={Logo} alt='Logo Burguer Kenzie' />

        {searchInput ? (
          <SearchModal>
            <InputSearch />{' '}
            <Button variant='icon' onClick={() => handleSearchInput()}>
              <IoMdClose />
            </Button>
          </SearchModal>
        ) : (
          <></>
        )}
        <div>
          <SearchContainer>
            <Button
              variant='icon'
              className='buttonSearch'
              onClick={() => handleSearchInput()}
            >
              <IoMdSearch />
            </Button>
            <InputSearch />
          </SearchContainer>
          <div className='cartIcon'>
            <Button
              variant='icon'
              onClick={() => {
                toggleModal()
              }}
            >
              <HiShoppingCart />
            </Button>
            <span className='cartCount'>{cart.length}</span>
          </div>
          <Link
            to='/'
            className='exitLink'
            onClick={() => {
              userLogout()
            }}
          >
            <BiExit />
          </Link>
        </div>
      </Container>
    </Navbar>
  )
}
