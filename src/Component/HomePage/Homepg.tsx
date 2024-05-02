import Image from 'next/image';
import '../../Styles/Homepage/Homepg.css';

type HomePageTextProps = {
  pageName: string,
  sideText: string,
  detailedTexr: string
}

export default function Homepg(props: HomePageTextProps) {
  return (
    <div className='heropage'>
      <div className='bg'>
        <div className='bg_wrapper'>
          <div className='bg_logo'>
            <Image
              alt={'#'}
              src={'/Logo.png'}
              className='logo'
              width={60}
              height={60}
            />
          </div>

          <div className='wrapper_container'>
            <div className='wrapper_container_child_one'>
              <h2 className='child_one_text'>{props.pageName}</h2>
            </div>

            <div className='wrapper_container_child_two'>

              <div className='child_two_child'>
                <h2 className='child_two_text'>{props.sideText}</h2>
              </div>


              <div className='wrapper_icon'>
                <Image
                  alt={'#'}
                  src={'/greater.png'}
                  className='sign'
                  width={8}
                  height={8}
                />
              </div>

              <div className='wrapper_child_three'>
                <h2 className='child_three_text'>{props.detailedTexr}</h2>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
