import { createContext, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { ILoginFormData } from '../../components/Form/LoginForm/types'
import { IRegisterFormData } from '../../components/Form/RegisterForm/types'
import { getUser } from '../../services/getUser'
import { userLogin } from '../../services/login'
import { userRegister } from '../../services/register'
import { IUserProviderValues, IUserProviderProps, IUser } from './types'

export const UserContext = createContext({} as IUserProviderValues)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState([] as IUser[])
  const [registerUser, setRegisterUser] = useState(false)
  const [globalLoading, setGlobalLoading] = useState(false)

  const submitLogin: SubmitHandler<ILoginFormData> = async (data) => {
    const loginVerify = async () => {
      setGlobalLoading(true)
      const response = await userLogin(data)
      if (response) {
        setUser([response])
      } else {
        setUser([])
      }
    }
    await loginVerify()
    setGlobalLoading(false)
  }

  const submitRegister: SubmitHandler<IRegisterFormData> = async (data) => {
    const registerVerify = async () => {
      setGlobalLoading(true)
      await userRegister(data)
      setRegisterUser(true)
    }
    await registerVerify()
    setGlobalLoading(false)
  }

  const userLogout = () => {
    const verifyLogout = () => {
      setGlobalLoading(true)
      localStorage.clear()
      setUser([])
    }
    verifyLogout()
    setGlobalLoading(false)
  }

  /* const loadingHandle = () => {
    setGlobalLoading(!globalLoading)
  } */

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('@TOKEN')
      setGlobalLoading(true)
      setRegisterUser(false)
      if (!token) {
        setGlobalLoading(false)
        return
      }
      const response = await getUser()

      if (response) {
        setUser([response])
      }
    }
    loadUser()
    console.log(user)
    setGlobalLoading(false)
  }, [globalLoading])

  return (
    <UserContext.Provider
      value={{ user, globalLoading, setRegisterUser, submitLogin, userLogout, submitRegister, registerUser }}
    >
      {children}
    </UserContext.Provider>
  )
}
