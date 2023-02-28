import React from 'react'
import supabase from '@/lib/supabase'
import Link from 'next/link'

export default async function Cat() {
  const { data } = await supabase.from('categories').select()
  if (!data) {
    throw new Error('No data')
  }
  console.log(data)

  return (
    <div>
      <div className="flex justify-center  text-green-700 capitalize space-x-10 ">
        {data.map((item) => (
          <div key={item.id}>
            <Link href={`/products/${item.urlpath}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
