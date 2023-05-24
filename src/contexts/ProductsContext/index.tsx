import { createContext, useEffect, useState } from 'react'
import { getProducts } from '../../services/getProducts'
import {
  ICartProducts,
  IProducts,
  IProductsProviderProps,
  IProductsProviderValues,
} from './types'

export const ProductsContext = createContext({} as IProductsProviderValues)

export const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const [products, setProducts] = useState([] as IProducts[])
  const [cart, setCart] = useState([] as ICartProducts[])
  const [searchInput, setSearchInput] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchData, setSearchData] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const clearCart = () => {
    setCart([])
  }

  const handleSearch = (value: string) => {
    setSearchData(value)
  }

  const handleSearchInput = () => {
    setSearchInput(!searchInput)
  }

  const removeFromCart = (data: ICartProducts) => {
    const filteredCart = cart.filter((sale) => sale.id != data.id)
    setCart(filteredCart)
  }

  const handleIncrementCount = (data: ICartProducts) => {
    const updateCart = cart.map((item) =>
      item.id === data.id ? { ...item, count: item.count + 1 } : item
    )
    setCart(updateCart)
  }

  const handleDecrementCount = (data: ICartProducts) => {
    const updateCart = cart.map((item) =>
      item.id === data.id || item.count > 0 ? { ...item, count: item.count - 1 } : item
    )
    setCart(updateCart)
  }

  const filteredProducts = !searchData
    ? products
    : products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchData.toLowerCase()) ||
          product.category.toLowerCase().includes(searchData.toLowerCase())
      )

  useEffect(() => {
    setLoading(true)
    const getAllProducts = async () => {
      const response = await getProducts()
      setProducts(response)
    }
    getAllProducts()
    setLoading(false)
  }, [loading])

  const hadleAddToCart = (data: ICartProducts) => {
    const productAlreadyExists = cart.find((item) => item.id === data.id)

    if (productAlreadyExists) {
      const updateCart = cart.map((item) =>
        item.id === data.id ? { ...item, count: item.count + 1 } : item
      )

      setCart(updateCart)
    } else {
      setCart((old) => [...old, data])
    }
    console.log(cart)
  }

  return (
    <ProductsContext.Provider
      value={{
        filteredProducts,
        toggleModal,
        isOpen,
        hadleAddToCart,
        cart,
        clearCart,
        removeFromCart,
        handleIncrementCount,
        handleDecrementCount,
        handleSearch,
        handleSearchInput,
        searchInput
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
