'use client'
import Navbarlist from '@/Component/Navbar/Navbarlist';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import '../../../Styles/ProductDetails/ProductDetails.css'
import { useSelector } from 'react-redux';
import { RootState, store } from '@/State/Store';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '@/State/Counter/counterSlice';
import Footer from '@/Component/Footer/Footer';
import Description from '@/Component/ProductDescription/Description';
import Relatedlist from '@/Component/ProductDescription/Related/Relatedlist';
import { addToCart } from '@/State/Cart/cartSlice';
import Link from 'next/link';
import '../../../Styles/ProductDetails/ProductDetailsRes.css';


interface ItemProps {
  params: {
    homeId: string;
  };
}

interface ItemData {
  id: number;
  image: string;
  title: string;
  price: string;
  cartQuantity?: number; // Add cartQuantity property as optional
}

const Item: React.FC<ItemProps> = ({ params }) => {
  const image: ItemData[] = [
    {
      id: 1,
      image: './item1.png',
      title: 'Trenton modular sofa_3',
      price: '$25,000.00'
     
    },
    {
      id: 2,
      image: './item2.png',
      title: 'Granite dining table',
      price: '$25,000.00'
    },
    {
      id: 3,
      image: './item3.png',
      title: 'Outdoor bar table and stool',
      price: '$25,000.00'
    },
    {
      id: 4,
      image: './item4.png',
      title: 'Grain coffee table',
      price: '$15,000.00'
    },
    {
      id: 5,
      image: './item5.png',
      title: 'Kent coffee table',
      price: '$225,000.00'
    },
    {
      id: 6,
      image: './item6.png',
      title: 'Round coffee table_color',
      price: '$251,000.00'
    },
    {
      id: 7,
      image: './item7.png',
      title: 'Reclaimed teak coffee table',
      price: '$25,200.00'
    },
    {
      id: 8,
      image: './item8.png',
      title: 'Plain console',
      price: '$258,200.00'
    },
    {
      id: 9,
      image: './item9.png',
      title: 'Reclaimed teak Sideboard',
      price: '$20,000.00'
    },
    {
      id: 10,
      image: './item10.png',
      title: 'SJP_0825',
      price: '$200,000.00'
    },
    {
      id: 11,
      image: './item11.png',
      title: 'Bella',
      price: '$100,000.00'
    },
    {
      id: 12,
      image: './item12.png',
      title: 'Granite square side table',
      price: '$258,800.00'
    },
    {
      id: 13,
      image: './item13.png',
      title: 'Asgard sofa',
      price: '$250,000.00'
    },
    {
      id: 14,
      image: './item14.png',
      title: 'Maya sofa three seater ',
      price: '$115,000.00'
    },
    {
      id: 15,
      image: './item15.png',
      title: 'Sofa',
      price: '$115,000.00'
    },
    {
      id: 16,
      image: './itrem16.png',
      title: 'Outdoor sofa set',
      price: '$244,000.00'
    },

  ];
 const count = useSelector((state: RootState) => state.counter.value);
 const cartItems = useSelector((state: RootState)=> state.cart.items)
 const dispatch = useDispatch();

 const handleAddToCart = (item: ItemData | null ) => {
 
  if (item) {
    // Ensure cartQuantity property is included when creating a new item
    const tempProduct = { ...item, cartQuantity: 1 };
    dispatch(addToCart(tempProduct));
    console.log('Updated cart state:', store.getState().cart.items, cartItems);
  } else {
    console.error('Cannot add null item to cart');
  }
};


  const homeId = params.homeId; // Get the homeId from the params prop

  const [item, setItem] = useState<ItemData | null>(null); // State to store the item


  useEffect(() => {
    // Fetch the item data based on the homeId
    const selectedItem = image.find(item => item.id === Number(homeId));
    setItem(selectedItem || null); // If no item is found, set item to null
  }, [homeId]);

  return (
    <div className='container'>
      <div className='container_child'>
        <div>
          <Navbarlist />
        </div>
        {/* Below the navbar */}
        <div className='path_wrapper'>
          <div className='path_wrapper_left'>
            <h2 className='path_wrapper_text'>Home</h2>
          </div>
          <div className='path_wrapper_icon'>
            <Image
              alt={'#'}
              src={'/greater.png'}
              className='sign'
              width={8}
              height={8}
            />
          </div>
          <div className='path_wrapper_middle_text'>
            <h2 className='path_wrapper_text'>Shop</h2>
          </div>

          <div className='path_wrapper_icon'>
            <Image
              alt={'#'}
              src={'/greater.png'}
              className='sign'
              width={8}
              height={8}
            />
          </div> 
          <div className='path_wrapper_right'>
            {item && (
              <div key={item.id} className='path_wrapper_right_text_wrapper'>
                <h2 className='path_right_text'>{item.title}</h2>
              </div>
            )}
          </div>
        </div>

        {/* Body of the page  */}
        <div className='body_wrapper_container'>
          <div className='body_wrapper'>
            <div className='body_wrapper_left'>
              {item && (
                <div key={item.id} className='body_wrapper_Image_container'>
                  <Image
                    src={`/${item?.image}`}
                    alt='#'
                    width={411}
                    height={391}
                  />
                </div>
              )}
            </div>

            <div className='body_wrapper_right'>
              <div className='body_wrapper_right_top'>
                <div className='body_wrapper_right_heading'>
                  {item && (
                    <div key={item.id} className='heading_details'>
                      <div className='heading_details_top'>
                        <h2 className='heading_title'>{item.title}</h2>
                      </div>
                      <div className='heading_details_bottom'>
                        <h2 className='heading_price'>{item.price}</h2>
                      </div>
                    </div>
                  )}
                </div>
                <div className='review_wrapper'>
                  <div className='review_wrapper_left'>
                    star
                  </div>
                  <div className='review_wrapper_right'>
                    5 customer review
                  </div>
                </div>
                <div className='body_wrapper_details_container'>
                  <div className='body_wrapper_item_details'>
                    <h3 className='item_details_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero laborum id nemo, natus deserunt quasi corrupti saepe quaerat non aliquid facere tempore ducimus voluptate eaque est dolores voluptates consequuntur vitae.</h3>
                  </div>

                  <div className='body_wrapper_item_size'>
                    <div className='body_wrapper_item_text'>
                      <h2 className='item_text'>Size</h2>
                    </div>
                    <div className='size_wrapper'>
                      <div className='size_label_left'>
                        <button className='btn_size_l'>
                          L
                        </button>
                      </div>
                      <div className='size_label_middle'>
                        <button className='btn_size_xl'>
                          xl
                        </button>
                      </div>
                      <div className='size_label_right'>
                        <button className='btn_size_xs'>
                          xs
                        </button>
                      </div>
                    </div>


                    <div className='color_wrapper'>
                      <div className='body_wrapper_item_color'>
                        <h2 className='item_text'>Color</h2>
                      </div>

                      <div className='color_div'>
                        <div className='color_div_left'>

                        </div>
                        <div className='color_div_middle'>

                        </div>
                        <div className='color_div_right'>

                        </div>
                      </div>
                    </div>

                    <div className='cart_increment_wrapper'>
                      <div className='increment_decrement_wrapper'>
                        <div className='decrement_wrapper'>
                          <button onClick={() => dispatch(decrement())} className='decrement'>
                            -
                          </button>
                        </div>
                        <div className='display'>
                          {count}
                        </div>
                        <div className='increment_wrapper'>
                          <button onClick={() => dispatch(increment())} className='increment'>
                            +
                          </button>
                        </div>
                      </div>

                      {item && (
                         <div key={item.id} className='cart_button_wrapper_container'>
                         <div className='cart_button_wrapper'>
                           <button onClick={()=> handleAddToCart(item)} className='cart_btn'>
                             Add to Cart
                           </button>
                         </div>
                       </div>
                      )}

                      <Link href='/cart'>Cart</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className='body_wrapper_right_bottom'>

                <div className='bottom_line_one'>
                  <div className='bottom_line_one_left'>
                    <h2 className='left_one_text'>SKU</h2>
                  </div>
                  <div className='bottom_line_one_middle'>
                    <h2 className='middle_one_text'>:</h2>
                  </div>
                  <div className='bottom_line_one_right'>
                    <h2 className='right_one_text'>SS001</h2>
                  </div>
                </div>

                <div className='bottom_line_two'>
                  <div className='bottom_line_two_left'>
                    <h2 className='left_two_text'>Category</h2>
                  </div>
                  <div className='bottom_line_two_middle'>
                    <h2 className='middle_two_text'>:</h2>
                  </div>
                  <div className='bottom_line_two_right'>
                    <h2 className='right_two_text'>Sofas</h2>
                  </div>
                </div>

                <div className='bottom_line_three'>
                  <div className='bottom_line_three_left'>
                    <h2 className='left_three_text'>Tags</h2>
                  </div>
                  <div className='bottom_line_three_middle'>
                    <h2 className='middle_three_text'>:</h2>
                  </div>
                  <div className='bottom_line_three_right'>
                    <h2 className='right_three_text'>Sofas, Chair, Home, Shop</h2>
                  </div>
                </div>

                <div className='bottom_line_four'>
                  <div className='bottom_line_four_left'>
                    <h2 className='left_four_text'>Share</h2>
                  </div>
                  <div className='bottom_line_four_middle'>
                    <h2 className='middle_four_text'>:</h2>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <Description />
        </div>
         
         <div>
          <Relatedlist />
         </div>
        <div>
        <Footer />
        </div>
      </div>
    </div>
  );
};

export default Item;
