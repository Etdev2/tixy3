import React from 'react'
import supabase from '@/lib/supabase'

export default async function Categories({ params: { categoriesSlug } }: { params: { categoriesSlug: string } }) {
  const { data: categories } = await supabase
    .from('categories')
    .select('*,product_subcategories(*)')
    .eq('categoriesSlug', categoriesSlug)
    .single()
  return <pre className="mx-auto max-w-7xl px-8">
    <h1>layer2</h1>
    
    {JSON.stringify(categories, null, 2)}</pre>
}
