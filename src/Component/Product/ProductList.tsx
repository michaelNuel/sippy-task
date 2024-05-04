'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../State/Product/productSlice';
import { AppDispatch, RootState } from '../../State/Store';
import Image from 'next/image';
import '../../Styles/ProductList/ProductList.css'

type ProductListProps = {
    imageList: {
        id: number,
        image: string
        title: string 
        price: string
    }[]
}

export default function ProductList(props: ProductListProps) {

    // const dispatch = useDispatch<AppDispatch>();
    // const products = useSelector((state: RootState) => state.products.products);
    // const status = useSelector((state: RootState) => state.products.status);
    // const error = useSelector((state: RootState) => state.products.error);

    // console.log("Products:", products); // Add this line to log products

    // useEffect(() => {
    //     if (status === 'idle') {
    //         dispatch(fetchProducts());
    //     }
    // }, [status, dispatch]);

    // if (status === 'loading') {
    //     return <div>Loading...</div>;
    // }

    // if (status === 'failed') {
    //     return <div>Error: {error}</div>;
    // }
    return (
        <div className='grid_wrapper'>
            <div className='grid_container'>
                <div className='grid_container_child'>
                    {props.imageList.map(images => {
                        return (
                            <div className='grid_container_details_wrapper'>
                                <div key={images.id} className='grid_container_image'>
                                    <Image
                                        alt='#'
                                        width={224}
                                        height={222}
                                        className='Productimage'
                                        src={`/${images.image}`}
                                    />
                                </div>

                                <div>
                                    <div>
                                        <h2>{images.title}</h2>
                                    </div>
                                    <div>
                                        <h2>{images.price}</h2>
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






