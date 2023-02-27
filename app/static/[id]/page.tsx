import supabase from '@/lib/supabase'
import {notFound} from "next/navigation"
import React from 'react'

export async function generateStaticParams(){
    const {data} = await supabase.from('post').select('id')
    return data ?? []
}

// will match the id  and return the single post
export default async function Post({params:{id}}:{params:{id:string}}) {
    const {data} = await supabase.from('post').select().match({id}).single()
    if(!data){
        notFound()
    }
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}
