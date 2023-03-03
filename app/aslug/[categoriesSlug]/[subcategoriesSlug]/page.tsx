import supabase from '@/lib/supabase'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function SubCatCategoryPage({
  params: { subcategoriesSlug },
}: {
  params: { subcategoriesSlug: string }
}) {
  const { data } = await supabase.from('product_subcategories').select().match({ subcategoriesSlug }).single()
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
