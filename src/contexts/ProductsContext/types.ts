export interface IProductsProviderValues {
  filteredProducts: IProducts[]
  cart: ICartProducts[]
  isOpen: boolean
  searchInput: boolean
  toggleModal: () => void
  clearCart: () => void
  handleSearchInput: () => void
  handleSearch: (value: string) => void
  hadleAddToCart: (data: ICartProducts) => void
  removeFromCart: (data: ICartProducts) => void
  handleIncrementCount: (data: ICartProducts) => void
  handleDecrementCount: (data: ICartProducts) => void
}

export interface IProductsProviderProps {
  children: React.ReactNode
}

export interface IProducts {
  category: string
  img: string
  name: string
  id: number
  price: number
}

export interface ICartProducts extends IProducts {
  count: number
}
