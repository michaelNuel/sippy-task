import React from 'react'
import Navbar from './Navbar'

export default function Navbarlist() {
    const navbarIcons = [
        {
            id: 1,
            iconImage: '/mdi_account-alert-outline.png',
            href:'#'
        },

        {
            id: 2,
            iconImage: '/search.png',
            href:'#'
        },
        {
            id: 3,
            iconImage:'/heart.png',
            href: '#'
        },
        {
            id: 4,
            iconImage:'/cart.png',
            href: '/cart'
        }
    ]
  return (
    <div>
      <Navbar nav={navbarIcons} />
    </div>
  )
}
