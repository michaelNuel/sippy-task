import '../../Styles/Tooglebar/Tooglebar.css'
import Btnlist from '../Buttons/Btnlist'
import ProductList from '../Product/ProductList'
import TooglebarContent from './TooglebarContent'

export default function Tooglebar() {
    // const image = [
    //     {
    //         id: 1,
    //         image: './item1.png',
    //         title: 'Trenton modular sofa_3',
    //         price: '$25,000.00'
    //     },
    //     {
    //         id: 2,
    //         image: './item2.png',
    //         title: 'Granite dining table with dining chair',
    //         price: '$25,000.00'
    //     },
    //     {
    //         id: 3,
    //         image: './item3.png',
    //         title: 'Outdoor bar table and stool',
    //         price: '$25,000.00'
    //     },
    //     {
    //         id: 4,
    //         image: './item4.png',
    //         title: 'Grain coffee table',
    //         price: '$15,000.00'
    //     },
    //     {
    //         id: 5,
    //         image: './item5.png',
    //         title: 'Kent coffee table',
    //         price: '$225,000.00'
    //     },
    //     {
    //         id: 6,
    //         image: './item6.png',
    //         title: 'Round coffee table_color',
    //         price: '$251,000.00'
    //     },
    //     {
    //         id: 7,
    //         image: './item7.png',
    //         title: 'Reclaimed teak coffee table',
    //         price: '$25,200.00'
    //     },
    //     {
    //         id: 8,
    //         image: './item8.png',
    //         title: 'Plain console',
    //         price: '$258,200.00'
    //     },
    //     {
    //         id: 9,
    //         image: './item9.png',
    //         title: 'Reclaimed teak Sideboard',
    //         price: '$20,000.00'
    //     },
    //     {
    //         id: 10,
    //         image: './item10.png',
    //         title: 'SJP_0825',
    //         price: '$200,000.00'
    //     },
    //     {
    //         id: 11,
    //         image: './item11.png',
    //         title: 'Bella',
    //         price: '$100,000.00'
    //     },
    //     {
    //         id: 12,
    //         image: './item12.png',
    //         title: 'Granite square side table',
    //         price: '$258,800.00'
    //     },
    //     {
    //         id: 13,
    //         image: './item13.png',
    //         title: 'Asgard sofa',
    //         price: '$250,000.00'
    //     },
    //     {
    //         id: 14,
    //         image: './item14.png',
    //         title: 'Maya sofa three seater ',
    //         price: '$115,000.00'
    //     },
    //     {
    //         id: 15,
    //         image: './item15.png',
    //         title: 'Sofa',
    //         price: '$115,000.00'
    //     },
    //     {
    //         id: 16,
    //         image: './itrem16.png',
    //         title: 'Outdoor sofa set',
    //         price: '$244,000.00'
    //     },
        
    // ]
    return (
        <section>
            <div className="wrapper" >
                <div className="toogle_bar">
                    <TooglebarContent />
                </div>

                <div>
                  {/* <ProductList imageList={image} /> */}
                  <Btnlist />
                </div> 
            </div>
        </section>
    )
}
