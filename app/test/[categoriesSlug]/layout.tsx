// next 13 layout.tsx complete with all the imports

import SubCategoriesNav from "./SubCatgoriesNav"

export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* @ts-expect-error Server Component */} 
        <SubCategoriesNav />
 
      <div>{children}</div>
    </div>
  )
}
