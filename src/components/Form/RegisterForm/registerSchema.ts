import * as yup from 'yup'

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required('O e-mail é obrigatório.')
    .email('O e-mail digitado é invalido.'),
  password: yup
    .string()
    .required('A senha é obrigatória.')
    .min(8, 'A senha precisa conter pelo menos 8 caracteres.')
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula ')
    .matches(/(\d)/, 'Deve conter ao menos 1 número')
    .matches(/(\W)|_/, 'Deve conter ao menos 1 caracater especial'),
  passwordConfirmation: yup
    .string()
    .required('A confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas não coincidem'),
  name: yup
    .string()
    .required('O nome é obrigatório')
    .min(3, 'O nome precisa de pelo menos 3 caracteres'),
})
