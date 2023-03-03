import PageNavLinks from './PageNavLinks'

export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex justify-center text-2xl text-blue-600 m-5">
        {/* @ts-expect-error Server Component */}
        <PageNavLinks />
      </div>
      <div>{children}</div>
    </div>
  )
}
