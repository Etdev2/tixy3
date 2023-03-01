import React from 'react'
import supabase from '@/lib/supabase'
import Navlinks from './CategoriesNav'
import Link from 'next/link'
import CategoriesNav from './CategoriesNav'

// add types for categoriesSlug

export default async function Products() {
  const { data } = await supabase.from('categories').select()
  if (!data) {
    throw new Error('No data')
  }
  console.log(data)
  const name = data.map((item) => item.name)

  return (
    <div>
      <div className="flex justify-center  text-pink-400 capitalize space-x-10 text-3xl text-bold mt-4">
        {' '}
        I am the page{' '}
      </div>
    </div>
  )
}
