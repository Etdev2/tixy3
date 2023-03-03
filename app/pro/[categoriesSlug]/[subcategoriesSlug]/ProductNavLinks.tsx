import React from 'react'
import supabase from '@/lib/supabase'
import Link from 'next/link'
type ProductSubcategory = {
  category_id: string
  created_at: string | null
  description: string | null
  id: string
  name: string | null
  subcategoriesSlug: string | null
  updated_at: string | null
}

type ProductCategory = {
  categoriesSlug: string | null
  created_at: string | null
  description: string | null
  id: string
  name: string | null
  updated_at: string | null
  product_subcategories: ProductSubcategory[] | null
}

export default async function SubCategoriesNavLinks() {
  const { data } = await supabase.from('categories').select('*,product_subcategories(*)')
  console.log(data)
  if (!data) {
    throw new Error('No data')
  }
  console.log(data)
  const subSlug = data?.flatMap((category: any) =>
    category.product_subcategories.map((subcategory: any) => subcategory.subcategoriesSlug)
  )
  console.log(subSlug)
  // const subSlug2 = data?.flatMap((category: any) =>
  // category.product_subcategories.map((subcategory: any) =><Link href={`/pro/${category.categoriesSlug}/${subcategory.subcategoriesSlug}`}>{}</Link> )

  // )

  const { data: productID } = await supabase.from('products').select()
  const {data:categoriesSlug} = await supabase.from('categories').select('categoriesSlug')
  const {data:subcategoriesSlug} = await supabase.from('product_subcategories').select('subcategoriesSlug')
  const prod = productID?.map((item) => item.name)
 const identifier = productID?.map((item) => item.id)


  return (
    <div>
      <div className="flex justify-center  text-green-500 capitalize space-x-10 text-3xl mt-3"></div>
      <div className="flex justify-center  text-purple-500 capitalize space-x-10 text-2xl mt-3">{
        
      }</div>
    </div>
  )
}
