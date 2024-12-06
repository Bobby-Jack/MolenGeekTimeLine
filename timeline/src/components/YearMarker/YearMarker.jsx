import './YearMarker.css'
export default function YearMarker({year="XX"}) {
  return (
    <div className='YearMarker'>
        <div className='YearMarkerYear'>
            20<span>{year}</span>
        </div>
    </div>
  )
}
