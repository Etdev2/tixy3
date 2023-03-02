import React from 'react'
import supabase from '@/lib/supabase'
import Link from 'next/link'

export default async function SubCategoriesNavLinks() {
  const { data } = await supabase.from('categories').select('*,product_subcategories(*)')
  console.log(data)
  if (!data) {
    throw new Error('No data')
  }
  console.log(data)

  return (
    <div>
      <div className="flex justify-center  text-green-500 capitalize space-x-10 text-3xl mt-3">
        {data.map((item) => (
          <div key={item.id}></div>
        ))}
        {data.map((item) => (
          <div key={item.id}>
            <Link href={`/productlinks/${item.categoriesSlug}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
