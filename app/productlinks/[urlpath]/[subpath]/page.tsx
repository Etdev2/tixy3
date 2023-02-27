import React from 'react'
import supabase from '@/lib/supabase'




export default async function Categories({params:{subpath}}:{params:{subpath:string}}) {
    const {data:categories} = await supabase.from('product_subcategories').select("*,products(*)").eq('subpath', subpath).single()
  return (
    <pre>{JSON.stringify(categories, null, 2)}</pre>
  )
}
