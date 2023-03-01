// next 13 layout.tsx complete with all the imports

export default function productLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="flex justify-center text-lg text-purple-600">
       Product
      </h1>
      <div>{children}</div>
    </div>
  )
}
