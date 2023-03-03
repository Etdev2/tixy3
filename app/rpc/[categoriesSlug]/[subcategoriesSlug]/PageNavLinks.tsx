import supabase from '@/lib/supabase'
import Link from 'next/link'
import React from 'react'

export default async function PageNavLinks() {
  let {data} = await supabase.rpc('get_product_info')
  console.log(data)
    return (
      <div>
        <h1 className="text-2xl text-blue-500 flex justify-center "> layer 3</h1>
  
        <div className="text-2xl text-blue-500 flex justify-center space-x-6">
          {data?.map(({categoriesslug ,subcategoriesslug ,name ,productslug }) => (
            <Link href={`/rpc/${categoriesslug}/${subcategoriesslug}/${productslug}`} key={`${name} `}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    )
  }
  
