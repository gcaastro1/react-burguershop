import { Link, useNavigate } from 'react-router-dom'
import { LoginForm } from '../../components/Form/LoginForm'
import { Container } from '../../styles/global'
import { FormContainer, LoginContainer, LogoContainer } from './style'
import Logo from '../../assets/logo.svg'
import Balls from '../../assets/balls.svg'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'

export const Login = () => {
  const { user, setRegisterUser } = useContext(UserContext)
  const navigate = useNavigate()

  setRegisterUser(false)

  useEffect(() => {
    
    if(user.length === 1){
      navigate('/home')
    }
  }, [user])

  return (
    <Container>
      <LoginContainer>
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
          <img src={Balls} className='ballsIcon'/>
        </LogoContainer>
        <FormContainer>
          <h3>Login</h3>
          <LoginForm />
          <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
          <Link to='/register'>Cadastrar</Link>
        </FormContainer>
      </LoginContainer>
    </Container>
  )
}
