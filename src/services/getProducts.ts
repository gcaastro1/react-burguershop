// api
import { api } from './api'

export const getProducts = async () => {
  const token = localStorage.getItem('@TOKEN')
  try {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const { data } = await api.get('products')

    return data
    //onSuccess(response.data)
  } catch (error) {
    console.log(error)
    //onError(error)
  }
}
