import './Line.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function Line({title='TITLE', inversion = true, textContent="BLANK", imgUrl="dummy.png", imgAlt="imgAlt"}) {
    useEffect(() => {
      AOS.init()
    }, [])
    
  return (
    <section className='Line' >
        {
            inversion ?
            <div className='LineText' data-aos="fade-left" >
              <span className='LineTitleLeft'>{title}</span>
              {textContent}
            </div>
            :
            <div className='LineImage' >
                <img data-aos="fade-left" src={"public/assets/img/"+imgUrl} alt={imgAlt} />
            </div>
        }
        <div className='LineVertical'></div>
        {
            !inversion ?
            <div className='LineText' data-aos="fade-right">
            <span className='LineTitleRight'>{title}</span>
              {textContent}
            </div>
            :
            <div className='LineImage'>
                <img data-aos="fade-right" src={"public/assets/img/"+imgUrl} alt={imgAlt} />
            </div>
        }
    </section>
  )
}
