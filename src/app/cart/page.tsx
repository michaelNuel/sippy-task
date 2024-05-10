'use client'
import { useSelector } from 'react-redux';
import { RootState } from '@/State/Store';
import Navbarlist from '@/Component/Navbar/Navbarlist';
import Homepg from '@/Component/HomePage/Homepg';
import MidSec from '@/Component/MidSec/MidSec';
import Footer from '@/Component/Footer/Footer';
import Image from 'next/image';
import '../../Styles/Cart/Cartpg.css';
import '../../Styles/Cart/CartpgRes.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, CartItem  } from '@/State/Cart/cartSlice';


export default function Cart() {
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
  const count = useSelector((state: RootState) => state.counter.value);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch()

  useEffect(() => {
   
    // Load cart items from local storage when the component mounts
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
        const parsedCartItems = JSON.parse(storedCartItems);
        // Dispatch an action to add the loaded cart items to the Redux store
        parsedCartItems.forEach((item: CartItem) => {
            dispatch(addToCart(item));
        });
    }
}, []);
 
useEffect(() => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

  return (
    <div className='container'>
      <div>
        <Navbarlist />
      </div>
      <div>
        <Homepg pageName='Cart' sideText='Home' detailedTexr='Cart' />
      </div>

      <div className='cart_details_wrapper'>
        <div className='cart_details_wrapper_left'>
          <div className='left_container'>
            <div className='subheading'>
              {subHeading.map(text => {
                return (
                  <div className='text_wrapper' key={text.id}>
                    <h2 className='text_subheading'>{text.subHeading}</h2>
                  </div>
                )
              })}
            </div>

            <div className='details_wrapper'>
              {cartItems.map(items => {
                //  const price = parseFloat(items.price.replace('$', ''));

                const subtotal = parseFloat(items.price.replace('$', '')) * count;
                return (
                  <>
                    <div key={items.id} className='Image_wrapper_title'>
                      <div className='image_wrapper'>
                        <Image
                          alt='\'
                          src={items.image}
                          height={24}
                          width={24}
                        />
                      </div>
                      <div className='title_wrapper'>
                        <h2 className='title_text'>{items.title}</h2>
                      </div>
                    </div>

                    <div className='price_wrapper '>
                      <h2 className='price_text'>{items.price}</h2>
                    </div>

                    <div className='quantity_wrapper '>
                      <h2 className='quantity_text'>{count}</h2>
                    </div>

                    <div className='sub_wrapper'>
                      <h2 className='sub_text'>{subtotal.toFixed(2)}</h2>
                    </div>

                  </>
                )
              })}

            </div>
          </div>
        </div>
        <div className='cart_details_wrapper_right'>
          <div className='cart_totals'>
            <div className='cart_totals_heading'>
              <h2 className='main_heading'>Cart Totals</h2>
            </div>
             <div className='omo'>
            <div className='subTotals_wrapper'>
              {cartItems.map(sub => {
                return (
                  < >
                    <div className='subtotals_cont' key={sub.id} >
                      <h2 className='subtotals_text'>SubTotals:</h2>
                    </div>
                    <div  className='price_wrapper'>
                      <h2 className='price_cart_text'>{sub.price}</h2>
                    </div>
                  </>
                )
              })}
            </div>

            <div className='totals_wrapper'>
              {cartItems.map(total => {
                return(
                  <>
                  <div className='total_heading_wrapper' key={total.id}>
                    <h2 className='total_text'>Total</h2>
                  </div>

                  <div  className='total_price_wrapper '>
                    <h2 className='total_price_text'>{total.price}</h2>
                  </div>
                  </>
                )
              })}
            </div>
            </div>

            <div className='link_wrapper'>
              <Link className='link' href='/checkout'>Checkout</Link>
            </div>
          </div>
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






