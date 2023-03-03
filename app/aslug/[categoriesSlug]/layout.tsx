import NavLinksForSubCat from "./NavLinksForSubCat"






export default async function productLayout({ children }: { children: React.ReactNode }) {



  return (
    <div>
        {/* @ts-expect-error Server Component */}

    <NavLinksForSubCat/>

      <div>{children}</div>
    </div>
  )
}
