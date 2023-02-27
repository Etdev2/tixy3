import React from 'react'
import supabase from '@/lib/supabase'

type Post = {
  id: string
  created_at: string
  title: string
}

export default async function page() {
  const { data, error } = await supabase.from('post').select()

  return (
    <div className="">
      <div className="flex justify-center text-2xl text-bold text-green-500 mt-10 ">
        {/* {data?.map((post)=>(
        <div key={post.id}>
            <h1>{post.id}</h1>
            <h1>{post.created_at}</h1>
            <h1>{post.title}</h1>
         </div>))} */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  )
}
