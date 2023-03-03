import supabase from './supabase'

export async function fetchSupabaseAllData() {
  const { data } = await supabase.from('categories').select('*, product_subcategories(*, products(*))')
  console.log(data)
  return data
}
