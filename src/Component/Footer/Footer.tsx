import '../../Styles/Footer/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_wrapper">
                <div className="footer_wrapper_child">
                    <div className='footer_wrapper_left'>
                        <h2 className='left_text' >400 University Drive Suit 200 Carol Gables,</h2>
                        <h2 className='left_text'>FL 334447 USA</h2>
                    </div>
                    <div className='footer_links'>
                        <div className='footer_links_child'>
                            <div className='footer_links_child_heading'>
                                <h2 className='child_heading'>Links</h2>
                            </div>
                            <div className='footer_link_links'>
                                <ul className='links_list'>
                                    <li className='links_text'>Home</li>
                                    <li className='links_text'>Shop</li>
                                    <li className='links_text'>About</li>
                                    <li className='links_text'>Contact</li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer_links'>
                            <div className='footer_links_child'>
                                <div className='footer_links_child_heading'>
                                    <h2 className='child_heading'>Help</h2>
                                </div>
                                <div className='footer_link_links'>
                                    <ul className='links_list'>
                                        <li className='links_text' >Payment Options</li>
                                        <li className='links_text'>Returns</li>
                                        <li className='links_text'>Privacy Polices</li>
                                        <li className='links_text'>  </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='footer-links'>
                            <div className='footer_links_child'>
                                <div className='footer_links_child_heading'>
                                    <h2 className='child_heading'>Newsletter</h2>
                                </div>
                                <div className='News_wrapper'>
                                    <div className='input_bar_wrapper'>
                                        <input className='input_bar' placeholder='Enter your Email' />
                                    </div>

                                    <div className='btn_wrapper'>
                                        <button className='subscribe_btn'>Subscribe</button>
                                    </div>
                                    {/* <div className='footer_link_links'>
                                        <ul className='links_list'>
                                            <li className='links_text' >  </li>
                                            <li className='links_text'> </li>
                                            <li className='links_text'> </li>
                                            <li className='links_text'>  </li>
                                            <li className='links_text'>  </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_bottom">
                    <div className='footer_bottom_child'>
                        <h2 className='footer_bottom_text'>2022 malebu, All rights reserverd</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
