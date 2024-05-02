import Image from 'next/image'
import React from 'react'
import '../../Styles/Navbar/Navbar.css'

type navbarProps = {
    nav: {
        id: number
        iconImage: string
    }[]
}

export default function Navbar(props: navbarProps) {
    return (
        <div className='navbar_container'>
            <div className='navbar'>
                <div className='navbar_wrapper'>
                    <div className='navbar_menu'>
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    {props.nav.map(menu => {
                        return (
                            <div  key={menu.id} className='navbar_icons'>
                                <div>
                                    <Image
                                        alt='#'
                                        src={menu.iconImage}
                                        className='icon_image'
                                        width={18}
                                        height={18}
                                    />
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
