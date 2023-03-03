import NavLinks from './NavLinks'

export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
       {/* @ts-expect-error Server Component */}
      <NavLinks />

      <div>{children}</div>
    </div>
  )
}
