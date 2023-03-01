// next 13 layout.tsx complete with all the imports
// import CategoriesNav from "./CategoriesNav"

import SubCategoriesNavLinks from "./SubCatergoriesNavLinks"


export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>

<h1 className="flex justify-center text-lg text-green-600">
        I am the sub Categories Layout
      </h1>
    
      <div className="flex justify-center text-xl text-green-600">
          {/* @ts-expect-error Server Component */}
      <SubCategoriesNavLinks/>
      </div>
      <div>{children}</div>
    </div>
  )
}
