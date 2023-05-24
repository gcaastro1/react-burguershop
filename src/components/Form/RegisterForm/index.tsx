import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../Button/style'
import { Input } from '../../Input/'
import { FormContainer } from '../style'
import { registerSchema } from './registerSchema'
import { IRegisterFormData } from './types'
import { useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext'


export const RegisterForm = () => {
  const { submitRegister } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    mode: 'onChange',
    resolver: yupResolver(registerSchema),
  })

  return (
    <FormContainer noValidate onSubmit={handleSubmit(submitRegister)}>
      <Input label='Nome' type='text' name='name' register={register} />
      {errors.name && <span>{errors.name.message}</span>}
      <Input
        label='E-mail'
        type='email'
        name='email'
        register={register}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <Input
        label='Senha'
        type='password'
        name='password'
        register={register}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <Input
        label='Confirmar senha'
        type='password'
        name='passwordConfirmation'
        register={register}
      />
      {errors.passwordConfirmation && (
        <span>{errors.passwordConfirmation.message}</span>
      )}
      <Button type='submit' variant='primaryDefault'>
        Cadastrar
      </Button>
    </FormContainer>
  )
}
