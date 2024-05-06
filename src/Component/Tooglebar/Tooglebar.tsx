import '../../Styles/Tooglebar/Tooglebar.css'
import Btnlist from '../Buttons/Btnlist'
import ProductList from '../Product/ProductList'
import TooglebarContent from './TooglebarContent'

export default function Tooglebar() {
    return (
        <section>
            <div className="wrapper" >
                <div className="toogle_bar">
                    <TooglebarContent />
                </div>

                <div>
                  <Btnlist />
                </div> 
            </div>
        </section>
    )
}
