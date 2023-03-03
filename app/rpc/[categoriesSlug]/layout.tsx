import SubNavLinks from "./SubNavLinks";



export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
           {/* @ts-expect-error Server Component */}

      <SubNavLinks />

      <div>{children}</div>
    </div>
  )
}
