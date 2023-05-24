import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup
  .string()
  .required('O e-mail é obrigatório.')
  .email('O e-mail digitado é invalido.'),
  password: yup
  .string()
  .required('A senha é obrigatória.')
  .min(5, 'A senha precisa conter pelo menos 8 caracteres.'),
})