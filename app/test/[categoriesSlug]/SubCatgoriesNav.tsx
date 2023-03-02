import React from 'react'
import supabase from '@/lib/supabase'

export default async function SubCategoriesNav() {
  const { data } = await supabase.from('categories').select('*,product_subcategories(*)')
  const newCatergorysArray = data?.map((category) => {
    return {
    
      product_subcategories: category.product_subcategories
 
     
    }
  })

  const productSubCatergory = newCatergorysArray?.map((category) => {
    return {
        product_subcategories: category.product_subcategories
    }
    })
  console.log(productSubCatergory)
  return (
    <div className="text-red-400">
      {data?.map((category) => {
        return (
          <div key={category.id}>
            <div className="flex justify-center text-green-600">
              <a href={`/product/${category.categoriesSlug}`}>{category.name}</a>
            </div>
           
          </div>
        )
      })}
    </div>
  )
}
