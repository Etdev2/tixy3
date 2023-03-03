import React from 'react'
import supabase from '@/lib/supabase'
import ShopByCat from './UiShopbyCatergory'
import FunctionTest from './FunctionTest'
// import NavPath from './NavPath'

export default async function Products() {
  const { data } = await supabase.from('categories').select()
  if (!data) {
    throw new Error('No data')
  }
  console.log(data)

  return (
    <div>
      {/* <NavPath /> */}
{/* @ts-expect-error Server Component */}
      <FunctionTest />
      {/* @ts-expect-error Server Component */}
      <ShopByCat />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
