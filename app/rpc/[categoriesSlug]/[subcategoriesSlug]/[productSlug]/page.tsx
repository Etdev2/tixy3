import supabase from '@/lib/supabase'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const { data: slugs } = await supabase.rpc('get_product_info')

  return slugs?.map((slug) => ({
    categoriesSlug: slug.categoriesslug,
    subcategoriesSlug: slug.subcategoriesslug,
    productSlug: slug.productslug,
  })) ?? []
}

export default async function Post({ params: { productSlug } }: { params: { productSlug: string } }) {
  const { data } = await supabase.from('products').select().match({ productSlug }).single()
  if (!data) {
    notFound()
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
