import React from 'react'
import Btnmain from './Btnmain'

export default function Btnlist() {
    const btnPage =[
        {
          id:1,
          button:"1",
          pageNumber: 1
        },
    
        {
          id:2,
          button:"2",
          pageNumber: 2
        },
    
        {
          id:3,
          button:"3",
          pageNumber: 3
        }
      ]
  return (
    <div>
      <Btnmain  btn={btnPage}/>
    </div>
  )
}
