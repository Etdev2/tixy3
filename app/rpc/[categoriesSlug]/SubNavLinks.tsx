import supabase from '@/lib/supabase'
import Link from 'next/link'
import React from 'react'

export default async function SubNavLinks() {
let {data} = await supabase.rpc('get_subcategory_info2')
console.log(data)
  return (
    <div>
      <h1 className="text-2xl text-red-400 flex justify-center "> layer2</h1>

      <div className="text-2xl text-red-400 flex justify-center space-x-6">
        {data?.map(({categoriesslug ,subcategoriesslug ,name }) => (
          <Link href={`/rpc/${categoriesslug}/${subcategoriesslug}`} key={`${name} `}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  )
}
