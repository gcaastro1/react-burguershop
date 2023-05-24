import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../Button/style'
import { Input } from '../../Input/'
import { FormContainer } from '../style'
import { loginSchema } from './loginSchema'
import { ILoginFormData } from './types'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'

export const LoginForm = () => {
  const { submitLogin } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  })

  return (
    <FormContainer noValidate onSubmit={handleSubmit(submitLogin)}>
      <Input label='E-mail' type='email' name='email' register={register} />
      {errors.email && <span>{errors.email.message}</span>}
      <Input
        label='Senha'
        type='password'
        name='password'
        register={register}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <Button type='submit' variant='primaryDefault'>
        Logar
      </Button>
    </FormContainer>
  )
}

