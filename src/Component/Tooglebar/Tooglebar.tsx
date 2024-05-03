import '../../Styles/Tooglebar/Tooglebar.css'
import ProductList from '../Product/ProductList'
import TooglebarContent from './TooglebarContent'

export default function Tooglebar() {
    const image = [
        {
            id: 1,
            image: './item1'
        },
        {
            id: 2,
            image: './item2'
        },
        {
            id: 3,
            image: './item3'
        },
        {
            id: 4,
            image: './item4'
        },
        {
            id: 5,
            image: './item5'
        },
        {
            id: 6,
            image: './item6'
        },
        {
            id: 7,
            image: './item7'
        },
        {
            id: 8,
            image: './item8'
        },
        {
            id: 9,
            image: './item9'
        },
        {
            id: 10,
            image: './item10'
        },
        {
            id: 11,
            image: './item11'
        },
        {
            id: 12,
            image: './item12'
        },
        {
            id: 13,
            image: './item13'
        },
        {
            id: 14,
            image: './item14'
        },
        {
            id: 15,
            image: './item15'
        },
        {
            id: 16,
            image: './item16'
        },
        
    ]
    return (
        <section>
            <div className="wrapper" >
                <div className="toogle_bar">
                    <TooglebarContent />
                </div>

                <div>
                  <ProductList imageList={image} />
                </div> 
            </div>
        </section>
    )
}
