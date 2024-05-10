'use client'
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../../State/Product/productSlice';
// import { AppDispatch, RootState } from '../../State/Store';
import Image from 'next/image';
import '../../Styles/ProductList/ProductList.css'
import Link from 'next/link';
import '../../Styles/ProductList/ProductlistRes.css';

type ProductListProps = {
    imageList: {
        id: number,
        image: string
        title: string
        price: string
    }[]
}

export default function ProductList(props: ProductListProps) {
    return (
        <div className='grid_wrapper'>
            <div className='grid_container'>
                <div className='grid_container_child'>
                    {props.imageList.map(images => {
                        return (
                            <div key={images.id} className='grid_container_details_wrapper'>
                                <div key={images.id} className='grid_container_image'>
                                    <Image
                                        alt='#'
                                        width={224}
                                        height={222}
                                        className='Productimage'
                                        src={images.image}
                                    />
                                </div>

                                <div className='grid_container_details_text'>
                                    <div className='grid_title_wrapper'>
                                        <h2 className='grid_title_text'>{images.title}</h2>
                                    </div>
                                    <div className='grid_price_container'>
                                        <div className='grid_price_wrapper' >
                                            <h2 className='grid_price_text'>{images.price}</h2>
                                        </div>
                                        <div className='buy_wrapper'>
                                            <button  className='btn_wrapper'>
                                                <Link className='btn_link' href={`/home/${images.id}`} id={`${images.id}`} >Buy</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}






