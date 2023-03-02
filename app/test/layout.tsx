// next 13 layout.tsx complete with all the imports

import CategoriesNav from "./CategoriesNav"

export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* @ts-expect-error Server Component */} 
        <CategoriesNav />
 
      <div>{children}</div>
    </div>
  )
}
