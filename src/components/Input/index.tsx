import { InputContainer, InputSearchText, InputText } from './style'
import { HiEye } from 'react-icons/hi'
import { IoMdSearch } from 'react-icons/io'
import { Button } from '../Button/style'
import { useContext, useState } from 'react'
import { IInput } from './types'
import { ProductsContext } from '../../contexts/ProductsContext'

export const Input = ({ label, type, name, register }: IInput) => {
  const [hidePass, setHidePass] = useState(true)
  const [inputType, setInputType] = useState(type)

  const handleInput = () => {
    setHidePass(!hidePass)
    hidePass ? setInputType('password') : setInputType('text')
  }

  return (
    <InputContainer>
      <InputText
        placeholder=' '
        type={inputType}
        id={name}
        {...register(name)}
      />
      <label htmlFor={name}>{label}</label>
      {name === 'password' || name === 'passwordConfirmation' ? (
        <Button variant='icon' type='button' onClick={handleInput}>
          <HiEye />
        </Button>
      ) : (
        false
      )}
    </InputContainer>
  )
}

export const InputSearch = () => {
  const { handleSearch } = useContext(ProductsContext)

  return (
    <InputContainer>
      <InputSearchText
        placeholder='Digitar pesquisa'
        onChange={(e) => handleSearch(e.target.value)}
      />
      <span className='iconSearch'>
        <IoMdSearch />
      </span>
    </InputContainer>
  )
}
