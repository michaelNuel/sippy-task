import Footer from '@/Component/Footer/Footer'
import Homepg from '@/Component/HomePage/Homepg'
import MidSec from '@/Component/MidSec/MidSec'
import Navbarlist from '@/Component/Navbar/Navbarlist'
import Tooglebar from '@/Component/Tooglebar/Tooglebar'
import React from 'react'
import '../../Styles/Main/Main.css';

export default function Homepage() {
    return (
        <>
            <Navbarlist />
            <Homepg pageName='Shop' sideText='Home' detailedTexr='shop' />
            <div>
                <Tooglebar />
            </div>
            <MidSec />
            <Footer />
        </>
    )
}
