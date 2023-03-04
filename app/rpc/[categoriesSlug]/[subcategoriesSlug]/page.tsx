import React from 'react'
import supabase from '@/lib/supabase'

export default async function Categories({ params: { subcategoriesSlug } }: { params: { subcategoriesSlug: string } }) {
  const { data: categories } = await supabase
    .from('product_subcategories')
    .select('*,products(*)')
    .eq('subcategoriesSlug', subcategoriesSlug)
    .single()
  return <pre  className="mx-auto max-w-7xl px-8">
    
    {JSON.stringify(categories, null, 2)}</pre>
}
