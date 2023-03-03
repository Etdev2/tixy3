'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function NavPath() {
    const router = useRouter()


  return <div>
    <button className='rounded-full bg-primary-500 m-3 p-3 max-sm:' type="button" onClick={()=> router.push('/productsNav/topwater')}>TopWater </button>
    <button className='rounded-full bg-primary-500 m-3 p-3 max-w-lg' type="button" onClick={()=> router.push('/productsNav/clothing')}>Clothing </button> 
    <button className='rounded-full bg-primary-500 m-3 p-3' type="button" onClick={()=> router.push('/productsNav/trolling')}>Trolling </button>
     <button className='rounded-full bg-primary-500 m-3 p-4' type="button" onClick={()=> router.push('/productsNav/jigs')}>   Jigs    </button>
     <button className='rounded-full bg-primary-500 m-3 p-4' type="button"onClick={()=> router.push('/productsNav/newarrivals')}>   New Arrivals    </button>

    <div>

    </div>

  </div>
}