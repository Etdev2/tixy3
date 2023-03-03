import { fetchCategoriesSlug } from '@/lib/getPageSlugs'
import Link from 'next/link'
import React from 'react'

export default async function NavLinksForCat() {
  const slug = await fetchCategoriesSlug()

  console.log(slug)

  return (
    <div className="text-3xl text-blue-500 m-3 flex justify-center space-x-5">
      {slug?.map((item) => (
        <Link href={`/aslug/${item.categoriesSlug}`} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  )
}
