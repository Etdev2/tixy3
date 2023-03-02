import React, { Fragment } from 'react'
import supabase from '@/lib/supabase'

export default async function Products() {
  const { data } = await supabase.from('categories').select()
 
  console.log(data)

  return (
    <div>
      I am a page
    </div>
  )
}
