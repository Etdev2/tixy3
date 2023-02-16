import React from 'react'
import data from 'data.json'



async function getData() {
  const res = await fetch('./data.json')
  const data = await res.json()
  console.log(data)
  return data
 
}


export async function generateStaticParams() {
    // const post = await g()
  return 
}