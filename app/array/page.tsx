import { fetchSupabaseAllData } from '@/lib/getArray'

interface Product {
  id: string
  name: string
  description: string
  created_at: string | null
  updated_at: string | null
  price: number
  image_url: string
  alt: string
  inventory_level: number | null
  average_rating: number | null
  productpath: string | null
}

interface ProductSubcategory {
  id: string
  category_id: string
  name: string
  description: string
  created_at: string | null
  updated_at: string | null
  subcategoriesSlug: string
  products: Product[]
}

interface Categories {
  id: string
  name: string
  description: string
  created_at: string | null
  updated_at: string | null
  categoriesSlug: string
  product_subcategories: ProductSubcategory[]
}

export default async function Page() {
  const data = await fetchSupabaseAllData()
  console.log(data)

  const name = data?.map((item: any) => item.name)

  const subcategoryNames = data?.flatMap((category: any) =>
    category.product_subcategories.map((subcategory: any) => subcategory.name)
  )

  console.log(name)
  console.log(subcategoryNames)

  return <div>{subcategoryNames}</div>
}
