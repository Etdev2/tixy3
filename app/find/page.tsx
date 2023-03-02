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

    const foundSlug = data?.find(categoriesSlug => categoriesSlug.categoriesSlug === "trolling")

    console.log(foundSlug)
  return <div>{}</div>
}
