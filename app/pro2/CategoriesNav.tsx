import React from 'react'
import supabase from '@/lib/supabase'
import Link from 'next/link'

export default async function CategoriesNav() {
  const { data } = await supabase.from('categories').select()
  if (!data) {
    throw new Error('No data')
  }
  console.log(data)

  return (
    <div>
      <div className="flex justify-center  text-pink-500 capitalize space-x-10 text-3xl mt-3">
        {data.map((item) => (
          <div key={item.id}>
            <Link href={`/pro/${item.categoriesSlug}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
