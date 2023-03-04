import NavLinks from './NavLinks'

export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="bg-white mx-auto max-w-7xl px-8 overflow-x-auto  ">

        {/* @ts-expect-error Server Component */}
        <NavLinks />

        <div>{children}</div>
      </div>
    </div>
  )
}
