import Homepg from '@/Component/HomePage/Homepg'
import Navbarlist from '@/Component/Navbar/Navbarlist'
import Tooglebar from '@/Component/Tooglebar/Tooglebar'
import React from 'react'

export default function Homepage() {
    return (
        <>
            <Navbarlist />
            <Homepg pageName='Shop' sideText='Home' detailedTexr='shop' />
            <div>
                <Tooglebar />
            </div>
        </>
    )
}
