'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../State/Product/productSlice';
import { AppDispatch, RootState } from '../../State/Store';
import Image from 'next/image';

type ProductListProps = {
    imageList: {
        id: number,
        image: string
    }[]
}

export default function ProductList(props: ProductListProps) {

    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);
    const status = useSelector((state: RootState) => state.products.status);
    const error = useSelector((state: RootState) => state.products.error);

    console.log("Products:", products); // Add this line to log products

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }
    return (
        <div>
            <div className='grid_container'>
                <div className='grid_container_child'>
                   <div className='grid_container_image'>
                      {props.imageList.map(imagee => {
                        return (
                            <>
                             <Image 
                              alt='#'
                              
                             />
                            </>
                        )
                      })}
                   </div>
                </div>
            </div>
        </div>
    )
}

{/* <ul>
{products.map(products => (
    <li key={products.id}>{products.title}</li>
))}
</ul> */}




