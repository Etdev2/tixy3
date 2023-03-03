import React from 'react'
import supabase from '@/lib/supabase'

export default async function FunctionTest() {
  let { data, error } = await supabase.rpc('get_catname_subslug')

  console.log(data)

  return (
    <div>
      <ul>
        {data?.map(({ category_name, subcategory_slug }) => (
          <li key={`${category_name}-${subcategory_slug}`}>
            {category_name} - {subcategory_slug}
          </li>
        ))}
      </ul>
    </div>
  )
}
