import { RiShoppingBag3Line } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterForm } from '../../components/Form/RegisterForm'
import { Container } from '../../styles/global'
import Logo from '../../assets/logo.svg'
import Balls from '../../assets/balls.svg'
import { RegisterContainer, LogoContainer, FormContainer } from './style'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const Register = () => {
  const { user, registerUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.length === 1) {
      navigate('/home')
    }
    if (registerUser) {
      navigate('/')
    }
  }, [user, registerUser])

  return (
    <Container>
      <RegisterContainer>
        <LogoContainer>
          <img src={Logo} alt='Logo Kenzie Burguer' />
          <div>
            <span className='bagIcon'>
              <RiShoppingBag3Line />
            </span>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os{' '}
              <span>melhores</span> ingredientes.
            </p>
          </div>
          <img src={Balls} className='ballsIcon' />
        </LogoContainer>
        <FormContainer>
          <div className='formHeader'>
            <h3>Cadastrar</h3>
            <Link to='/'>Voltar</Link>
          </div>
          <RegisterForm />
        </FormContainer>
      </RegisterContainer>
    </Container>
  )
}
