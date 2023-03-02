import React from 'react'
import supabase from '@/lib/supabase'

export default async function Categories({ params: { categoriesSlug } }: { params: { categoriesSlug: string } }) {
  const { data: categories } = await supabase
    .from('categories')
    .select('*,product_subcategories(*)')
    .eq('categoriesSlug', categoriesSlug)
    .single()

  console.log(categories)

  return (
    <div>
        <h1 className='text-xl  flex justify-center text-green-400'>I am the product sub categories page</h1>
      <pre>{JSON.stringify(categories, null, 2)}</pre>
    </div>
  )
}
