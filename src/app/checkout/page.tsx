import Footer from '@/Component/Footer/Footer'
import Homepg from '@/Component/HomePage/Homepg'
import MidSec from '@/Component/MidSec/MidSec'
import Navbarlist from '@/Component/Navbar/Navbarlist'
import React from 'react'
import '../../Styles/Checkout/CheckOut.css';

export default function page() {
  return (
    <div className='container'>
      <div>
        <Navbarlist />
      </div>
      <div>
        <Homepg pageName='CheckOut' sideText='Home' detailedTexr='Checkout'  />
      </div>
      
      <div>
      <MidSec />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
