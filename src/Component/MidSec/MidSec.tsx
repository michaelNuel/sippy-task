import '../../Styles/MidSec/MidSec.css';

export default function MidSec() {
    return (
        <div className="midSec_container">
            <div className="midSec_wrapper">
                <div className="midSec_child">
                    <div className='midSec_mainText'>
                        <h2 className='mainText_text'>Free Delivery</h2>
                    </div>
                    <div className='midSec_subText'>
                        <h2 className='subText_text'>For all orders over $50, are free orders</h2>
                    </div>
                </div>

                <div className="midSec_child">
                    <div className='midSec_mainText'>
                        <h2 className='mainText_text'>90 Days return</h2>
                    </div>
                    <div className='midSec_subText'>
                       <h2 className='subText_text'> If goods have problem, you consult us for a refund</h2>
                    </div>
                </div>

                <div className="midSec_child">
                    <div className='midSec_mainText'>
                        <h2 className='mainText_text'>Secure Payment</h2>
                    </div>
                    <div className='midSec_subText'>
                       <h2 className='subText_text'>100% secure payment, zero payment issues </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
