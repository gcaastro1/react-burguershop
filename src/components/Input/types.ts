import { UseFormRegister } from "react-hook-form"
import { ILoginFormData } from "../Form/LoginForm/types"
import { IRegisterFormData } from "../Form/RegisterForm/types"

export interface IInput {
  label: string
  type: string
  name: any
  register: UseFormRegister<ILoginFormData | IRegisterFormData>
}