// next 13 layout.tsx complete with all the imports

import ProductNavLinks from "./ProductNavLinks";

export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="flex justify-center text-lg text-purple-600">
       Product
                {/* @ts-expect-error Server Component */}
       <ProductNavLinks />
      </h1>
      <div>{children}</div>
    </div>
  )
}
