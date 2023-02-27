import React from 'react'
import supabase from '@/lib/supabase'



async function page() {
  const { data, error } = await supabase.from('products').select('*')

  if (error) {
    throw error
  }
  console.log(data)

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default page
