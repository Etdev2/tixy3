import NavLinks from './NavLinks'

export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavLinks />

      <div>{children}</div>
    </div>
  )
}
