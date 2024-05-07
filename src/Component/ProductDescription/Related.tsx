import Image from "next/image";

type RelatedProps = {
    related: relatedData[];
}

interface relatedData {
    id: number
    image: string
    title: string
    price: string
}

export default function Related(props:RelatedProps) {
    const related: relatedData[] = [
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
    ]
  return ( 
    <div className="related_prodcts_container">
        <div className="related_products_wrapper">
            <div className="related_grid">
              {props.related.map( products => {
                return(
                    <div className='grid_container_details_wrapper'>
                    <div key={products.id} className='grid_container_image'>
                        <Image
                            alt='#'
                            width={224}
                            height={222}
                            className='Productimage'
                            src={`/${products.image}`}
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
        </div>
    </div>
  )
}
