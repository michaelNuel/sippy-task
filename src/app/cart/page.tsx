'use client'
import { useSelector } from 'react-redux';
import { RootState } from '@/State/Store';
import Navbar from '@/Component/Navbar/Navbar';
import Navbarlist from '@/Component/Navbar/Navbarlist';
import Homepg from '@/Component/HomePage/Homepg';
import MidSec from '@/Component/MidSec/MidSec';
import Footer from '@/Component/Footer/Footer';
import Image from 'next/image';
import '../../Styles/Cart/Cartpg.css';

export default function page() {
  const subHeading = [
    {
      id: 1,
      subHeading: 'product'
    },
    {
      id: 2,
      subHeading: 'Price'
    },
    {
      id: 3,
      subHeading: 'quantity'
    },
    {
      id: 4,
      subHeading: 'Subtotal'
    }
  ]
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div>
      <div>
        <Navbarlist />
      </div>
      <div>
        <Homepg pageName='Cart' sideText='Home' detailedTexr='Cart' />
      </div>

      <div className='cart_details_wrapper'>
        <div className='cart_details_wrapper_left'>
          {cartItems.map(item => {
            return (
              <table className='item_table' key={item.id}>
                <div className='table_heading_wrapper'>
                <thead className='table_heading'>
                  {subHeading.map(heading => {
                    return (
                      <th className='heading_tag' key={heading.id}>
                        <h2 className='heading_text'>{heading.subHeading}</h2>
                      </th>
                    )
                  })}
                </thead>
                </div> 
                <tbody className='table_body'>
                  <tr className='body_table_row'>
                    <div className='row_wrapper'>
                      <div className='image_row_wrapper'>
                        <Image
                          alt='#'
                          src={`/${item.image}`}
                          height={18}
                          width={18}
                        />
                      </div>
                      <div className='row_text_wrapper'>
                        <h2 className='first_text'>{item.title}</h2>
                      </div>
                    </div>
                  </tr>
                  <tr>
                    <h2>{item.price}</h2>
                  </tr>
                  <tr>
                    <h2>{item.cartQuantity}</h2>
                  </tr>
                  <tr>
                    <h2>{item.price}</h2>
                  </tr>
                </tbody>
              </table>
            )
          })}
        </div>
        <div className='cart_details_wrapper_right'>
          total sum
        </div>
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






