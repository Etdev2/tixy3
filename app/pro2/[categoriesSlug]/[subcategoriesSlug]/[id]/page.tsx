import supabase from '@/lib/supabase'
import { notFound } from 'next/navigation'

export async function generateStaticParams(){
    const {data} = await supabase.from('categories').select('id')
    return data ?? []
}


export default async function Products({ params: { id } }: { params: { id: string } }) {
  const { data:products } = await supabase.from('products').select().match({ id }).single()
  if (!products) {
    notFound()
  }
  return <pre>{JSON.stringify(products, null, 2)}</pre>
}
