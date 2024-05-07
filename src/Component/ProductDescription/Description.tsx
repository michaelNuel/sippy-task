import Image from 'next/image'
import React from 'react'
import '../../Styles/Description/Description.css';

export default function Description() {
    return (
        <div className='description_wrapper_container'>
            <div className='description_wrapper'>

                <div className='description_text_wrapper'>
                    <div className='description_heading'>
                        <h2 className='main_heading'>Description</h2>
                    </div>
                    <div className='description_text_child'>
                        <h2 className='description_text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores sunt quod perspiciatis fugit illo possimus vitae quia neque veniam adipisci! Assumenda, veritatis dolorem! Exercitationem, at? Quidem minus, repudiandae quibusdam eveniet est, porro quod deserunt fugiat maxime delectus facilis magni deleniti eaque perspiciatis! Fugiat facilis eum, dignissimos fugit praesentium eligendi laborum quia explicabo modi unde, dolore architecto aliquam quos eaque aperiam nostrum. Sit neque unde eaque. Dolores eos reprehenderit cupiditate beatae.</h2>
                    </div>
                </div>

                <div className='description_image_wrapper'>
                    <div>
                        <Image
                            alt='#'
                            src={'/frontsofa.png'}
                            className='sofa'
                            width={606}
                            height={420}
                        />
                    </div>

                    <div>
                        <Image
                            alt='#'
                            src={'/sofa.png'}
                            width={605}
                            height={420}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
