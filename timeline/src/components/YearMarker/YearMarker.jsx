import './YearMarker.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function YearMarker({year="XX"}) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='YearMarker'>
        <div className='YearMarkerYear' data-aos="fade-up">
            20<span>{year}</span>
        </div>
    </div>
  )
}
