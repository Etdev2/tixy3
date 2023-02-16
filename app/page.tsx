import React from 'react'
import Header from './Header'

function page() {
  return (
    <div>
      <Header />
      <div className="">
        <div
          className="items-center flex flex-col justify-center text-9xl mt-10">
          <h1 className="text-primary-500 ">Home Page</h1>
        </div>
      </div> 
    </div>
  )
}

export default page
