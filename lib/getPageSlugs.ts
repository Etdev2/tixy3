import supabase from './supabase'

export async function fetchCategoriesSlug() {
  const { data } = await supabase.from('categories').select('categoriesSlug,name,id')
  return data
}

export async function fetchProductSubCategoriesSlug() {
  const { data } = await supabase.from('product_subcategories').select('subcategoriesSlug,name,id')
  return data
}

export async function fetchProductSlug() {
  const { data } = await supabase.from('products').select('productSlug,name,id')
  return data
}

export async function fetchCategoriesTable() {
  const { data } = await supabase.from('categories').select()
  return data
}


export async function fetchCateriesAndsubiesTable(){
  const { data } = await supabase.from('categories').select('*,product_subcategories(*)')
  return data
}