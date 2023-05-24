// api
import { Dispatch, SetStateAction, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { api } from './api'

export const getUser = async () => {

  const token = localStorage.getItem('@TOKEN')
  const id = localStorage.getItem('@USERID')

  try {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const { data } = await api.get(`users/${id}`)

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
