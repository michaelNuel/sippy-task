import React from 'react'
import '../../Styles/Tooglebar/TooglebarContent.css'
import '../../Styles/Tooglebar/TooglebarContentRes.css';
import Image from 'next/image'

export default function TooglebarContent() {
    return (
        <div className='tooglebar_content_wrapper'>
            <div className='tooglebar_child_wrapper'>
                <div className='tooglebar_child_left'>
                    <div className='tooglebar_child_wrapper'>
                        <div  className='tooglebar_child_wrapper_left'>
                            <div className='tooglebar_child_left_left'>
                                <div className='tooglebar_child_left_left_image'>
                                    <Image
                                        alt={'#'}
                                        src={'/filter.png'}
                                        className='icon'
                                        height={18}
                                        width={18}
                                    />
                                </div>
                            </div>

                            <div className='tooglebar_child_left_right'>
                                <div className='tooglebar_child_left_right_child'>
                                    <h2 className='tooglebar_child_left_right_text'>Filter</h2>
                                </div>
                            </div>
                        </div>
                        <div className='tooglebar_child_wrapper_middle'>
                            <div>
                                <Image
                                    alt='#'
                                    src={'/dots.png'}
                                    className='icon'
                                    height={18}
                                    width={18}
                                />
                            </div>
                            {/* <h2>7</h2> */}
                        </div>
                        <div className='tooglebar_child_wrapper_right'>
                            <div>
                                <Image
                                    alt='#'
                                    src={'/idk.png'}
                                    className='icon'
                                    height={18}
                                    width={18}
                                />
                            </div>
                            {/* <h2>7</h2> */}
                        </div>
                    </div>

                    <div className='tooglebar_child_wrapper_duo'>
                       <div className='tooglebar_child_wrapper_duo_child'>
                        <h2 className='tooglebar_child_wrapper_duo_child_text'>Showing 1-16 of 32 result</h2>
                       </div>
                    </div>
                </div>

                <div className='tooglebar_child_right'>
                    <div className='tooglebar_child_right_left'>
                        <div className='tooglebar_child_right_left_text_wrapper_left'>
                            <h2 className='tooglebar_child_right_left_text'>Show</h2>
                        </div>

                        <div className='tooglebar_child_right_left_text_wrapper_right'>
                            <h2 className='tooglebar_child_right_box'>16</h2>
                        </div>
                    </div>

                    <div className='tooglebar_child_right_right'>
                        <div className='tooglebar_child_right_right_text_wrapper_left'> 
                            <h2 className='tooglebar_child_right_right_text'>Sort by</h2>
                            <h2 className='tooglebar_child_right_right_text_mobile'>Sort by</h2>
                        </div>

                        <div className='tooglebar_child_right_right_text_wrapper_right'>
                            <h2 className='tooglebar_child_right_right_box'>Default</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
