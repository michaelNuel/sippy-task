import Image from "next/image"
import '../../../Styles/Related/Related.css'
import '../../../Styles/Related/RelatedRes.css';
import Link from "next/link"

type Relatedmain = {
    related: {
        id: number
        image: string
        title: string
        price: string
    }[]
}

export default function Relatedmain(props: Relatedmain) {
    return (
        <div className="related_product_container">
            <div className="related_heading">
               <h2 className="heading_text">Related Products</h2>
            </div>
            <div className="related_product_grid">
                {props.related.map(products => {
                    return (
                        <div key={products.id} className='grid_container_details_wrapper'>
                            <div  className='grid_container_image'>
                                <Image
                                    alt='#'
                                    width={224}
                                    height={222}
                                    className='Productimage'
                                    src={products.image}
                                />
                            </div>
                            <div className='grid_container_details_text'>
                                <div className='grid_title_wrapper'>
                                    <h2 className='grid_title_text'>{products.title}</h2>
                                </div>
                                <div className='grid_price_container'>
                                    <div className='grid_price_wrapper' >
                                        <h2 className='grid_price_text'>{products.price}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="viewmore">
                <div className="viewmore_wrapper">
                    <Link className="link_more" href={'/home'}>View More</Link>
                </div>
            </div>
        </div>
    )
}


