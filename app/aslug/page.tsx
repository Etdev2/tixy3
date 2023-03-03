import supabase from '@/lib/supabase'
import React from 'react'

export default async function page() {
  const { data } = await supabase.from('categories').select()

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
