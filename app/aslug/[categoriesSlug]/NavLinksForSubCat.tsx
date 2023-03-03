import { fetchCategoriesSlug, fetchCateriesAndsubiesTable, fetchProductSubCategoriesSlug } from '@/lib/getPageSlugs'
import Link from 'next/link'
import React from 'react'

export default async function NavLinksForSubCat() {
  const slug = await fetchCategoriesSlug()
  const subSlug = await fetchProductSubCategoriesSlug()

//   const catergoriesSlugs = slug?.map((item) => item.categoriesSlug)

//   const catergoriesName = slug?.map((item) => item.name)

//   const subCategoriesSlug = subSlug?.map((item) => item.subcategoriesSlug)
//   const subCatergroiesName = subSlug?.map((item) => item.name)

//   const findCatergoriesName= slug?.find((item)=>item.name)
//   const findCatergoriesSlug = slug?.find((item)=>item.categoriesSlug)
//   const findSubCatergoiesName= subSlug?.find((item)=>item.name)
//   console.log(findCatergoriesSlug)

//   console.log(catergoriesName)
//   console.log(subCatergroiesName)


//   console.log(catergoriesSlugs)
//   console.log(subCategoriesSlug)

//   console.log(slug)
const tables = await fetchCateriesAndsubiesTable()
console.log(tables)
 
  return (
    <div>
      <div className="text-xl text-blue-500 m-3 flex justify-center space-x-5">
        {/* {slug?.map((item:any) => (
            
          <Link href={`/aslug/${item.categoriesSlug}`} key={item.id}>
            {item.name}
          </Link>
        ))} */}
      </div>
      <div className="text-xl text-red-500 m-3 flex justify-center ">
        {/* {subSlug?.map((item)=>(
            <div key={item.id} >
          <Link href={`/aslug/${}}/${item.subcategoriesSlug}`}>{item.name}</Link>
        </div>))} */}

        { tables?.flatMap((item)=>(
            <div key={item.id}>
                { 
                  
                
                }
              
            </div>
        ))

        }
      </div>
    </div>
  )
}
