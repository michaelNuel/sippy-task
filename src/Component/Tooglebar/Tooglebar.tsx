import '../../Styles/Tooglebar/Tooglebar.css'
import TooglebarContent from './TooglebarContent'

export default function Tooglebar() {
    return (
        <section>
            <div className="wrapper" >
                <div className="toogle_bar">
                    <TooglebarContent />
                </div>

                <div>
                   <h2>content</h2> 
                </div>
            </div>
        </section>
    )
}
