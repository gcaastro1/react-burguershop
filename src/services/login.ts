// api
import { api } from './api'
// toast
import { toast } from 'react-toastify'
import { ILoginFormData } from '../components/Form/LoginForm/types'

export const userLogin = async ({ email, password }: ILoginFormData) => {
  try {
    const { data } = await api.post('login ', {
      email: email,
      password: password,
    })

    const { accessToken, user } = data

    localStorage.setItem('@TOKEN', accessToken)
    localStorage.setItem('@USERID', user.id)

    return user
  } catch (error) {
    toast.error('Senha ou email incorretos.')
    return null
  }
}
