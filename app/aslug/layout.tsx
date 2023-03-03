
import NavLinksForCat from './NavLinksForCat'




export default async function productLayout({ children }: { children: React.ReactNode }) {



  return (
    <div>
        {/* @ts-expect-error Server Component */}

      <NavLinksForCat />

      <div>{children}</div>
    </div>
  )
}
