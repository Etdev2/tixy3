
import supabase from '@/lib/supabase'
import { notFound } from 'next/navigation'
import React from 'react'

// .from('categories')
// .select('*,product_subcategories(*)')
// .eq('categoriesSlug', categoriesSlug)
// .single()

export default async function SubCatCategoryPage({
  params: { categoriesSlug },
}: {
  params: { categoriesSlug: string }
}) {
  const { data } = await supabase.from('categories').select('*,product_subcategories(*)').match({ categoriesSlug }).single()
  if (!data) {
    notFound()
  }



  return (
    <div>
      <div className="flex justify-center text-blue-800 text-2xl font-bold mt-1">{}</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
