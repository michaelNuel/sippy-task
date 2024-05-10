import Image from 'next/image'
import React from 'react'
import '../../Styles/Navbar/Navbar.css'
import '../../Styles/Navbar/NavbarResponsive.css';
import Link from 'next/link';

type navbarProps = {
    nav: {
        id: number
        iconImage: string
        href: string
    }[]
}

export default function Navbar(props: navbarProps) {
    return (
        <div className='navbar_container'>
            <div className='navbar'>
                <div className='navbar_wrapper'>
                    <div className='navbar_menu'>
                        <ul>
                            <Link className='link' href={'/home'}><li>Home</li></Link>
                            <Link className='link' href={'#'}> <li>Shop</li></Link>
                            <Link className='link' href={'#'}><li>About</li></Link>
                            <Link className='link' href={'#'}><li>Contact</li></Link>
                        </ul>
                    </div>
                    {props.nav.map(menu => {
                        return (
                            <div key={menu.id} className='navbar_icons'>
                                <div>
                                    <Link href={menu.href}>
                                        <Image
                                            alt='#'
                                            src={menu.iconImage}
                                            className='icon_image'
                                            width={18}
                                            height={18}
                                        />
                                    </Link>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
