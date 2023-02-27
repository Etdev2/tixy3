import React from 'react'
import supabase from '@/lib/supabase'




export default async function Categories({params:{urlpath}}:{params:{urlpath:string}}) {
    const {data:categories} = await supabase.from('categories').select("*,product_subcategories(*)").eq('urlpath', urlpath).single()
  return (
    <pre>{JSON.stringify(categories, null, 2)}</pre>
  )
}
