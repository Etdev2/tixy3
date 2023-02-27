import supabase from '@/lib/supabase'
import React from 'react'
import Link  from 'next/link'


//retu8rn any

export default async function Navlinks():Promise<JSX.Element> {
    const { data } = await supabase.from('categories').select()

    console.log(data)


    





  return (
    <Link href={'/'}>navlinks</Link>
  )
}
