// api
import { api } from './api'
// toast
import { toast } from 'react-toastify'
import { IRegisterFormData } from '../components/Form/RegisterForm/types'

export const userRegister = async ({
  email,
  password,
  name,
}: IRegisterFormData) => {
  try {
    const { data } = await api.post('users', {
      email: email,
      password: password,
      name: name,
    })

    const { accessToken } = data

    localStorage.setItem('@TOKEN', accessToken)
    toast.success('Usuario cadastrado com sucesso.')
  } catch (error) {
    console.log(error)
    toast.error('Não foi possivel cadastrar o usuario.')
  } finally {
  }
}
