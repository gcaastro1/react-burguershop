import { SubmitHandler } from "react-hook-form"
import { ILoginFormData } from "../../components/Form/LoginForm/types"
import { IRegisterFormData } from "../../components/Form/RegisterForm/types"

export interface IUserProviderProps {
  children: React.ReactNode
}

export interface IUserProviderValues {
  user: IUser[]
  globalLoading: boolean
  registerUser: boolean
  setRegisterUser: (val: boolean) => void
  submitLogin: SubmitHandler<ILoginFormData>
  submitRegister: SubmitHandler<IRegisterFormData>
  userLogout: () => void
}

export interface IUser {
  email: string
  password: string
  name: string
  id: number
}