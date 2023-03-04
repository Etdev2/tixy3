import React from 'react'
import supabase from '@/lib/supabase'

export default async function Products() {
  const { data } = await supabase.from('categories').select()
  if (!data) {
    throw new Error('No data')
  }
  console.log(data)

  return (
    <div className=''>
      <h1>Layer 1</h1>
      <pre className=" ">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
