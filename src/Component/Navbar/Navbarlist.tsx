import React from 'react'
import Navbar from './Navbar'

export default function Navbarlist() {
    const navbarIcons = [
        {
            id: 1,
            iconImage: '/mdi_account-alert-outline.png'
        },

        {
            id: 2,
            iconImage: '/search.png'
        },
        {
            id: 3,
            iconImage:'/heart.png'
        },
        {
            id: 4,
            iconImage:'/cart.png'
        }
    ]
  return (
    <div>
      <Navbar nav={navbarIcons} />
    </div>
  )
}
