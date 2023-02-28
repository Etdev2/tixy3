import supabase from "@/lib/supabase"
import { notFound } from "next/navigation"





export default async function Post({params:{id}}:{params:{id:string}}) {
    const {data} = await supabase.from('products').select().match({id}).single()
    if(!data){
        notFound()
    }
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}
