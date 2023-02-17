export type Product = {
  id: number
  name: string
  description: string
  image?: string
  imageBlur?: string
  isBestSeller?: boolean
  leadTime?: number
  price: Price
  discount?: Discount
  isAvailable: boolean
}

type Price = {
  amount: number
  currency: Currency
  scale: number
}

type Currency = {
  code: string
  base: number
  exponent: number
}

type Discount = {
  percent: number
  expires?: number
}
