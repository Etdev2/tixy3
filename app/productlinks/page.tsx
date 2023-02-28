import React from 'react'
import supabase from '@/lib/supabase'
import Navlinks from './Navlinks'
import Link from 'next/link'
import Cat from './Navlinks'

// add types for urlpath

export default async function Products() {
  const { data } = await supabase.from('categories').select()
  if (!data) {
    throw new Error('No data')
  }
  console.log(data)
  const name = data.map((item) => item.name)

  return (
    <div>
   
      <div className='flex justify-center  text-pink-400 capitalize space-x-10 '>
      {data.map((item) => (
          <div key={item.id} >
            <Link href={`/products/${item.urlpath}`}>{item.name}</Link>
          </div>
        ))}
       
      </div>


      <div>
         {/* @ts-expect-error Server Component */}
       <Cat/>
      </div>
    </div>
  )
}
