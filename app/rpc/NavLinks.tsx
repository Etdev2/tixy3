import supabase from '@/lib/supabase'
import Link from 'next/link'
import React from 'react'

export default async function NavLinks() {
  const { data, error } = await supabase.from('categories').select()

  if (error) {
    throw error
  }
  console.log(data)

  return (
    <div>
      <h1 className="text-bold flex justify-center text-xl text-green-400">This are the links</h1>
      <div className='flex text-2xl text-bold space-x-5 justify-center m-5 text-green-400'>
        {data.map((item) => (
          <Link href={`/rpc/${item.categoriesSlug}`} key={item.id}>{item.name}</Link>
        ))}
      </div>
    </div>
  )
}
