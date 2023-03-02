import React from 'react'
import supabase from '@/lib/supabase'



export default async function CategoriesNav() {
    const { data } = await supabase.from('categories').select()
  return (
    <div className='text-red-400'>{
        data?.map((category) => {
            return (
                <div key={category.id}>
                    <a href={`/test/${category.categoriesSlug}`}>{category.name}</a>
                </div>
            )
        })
    }</div>
  )
}
