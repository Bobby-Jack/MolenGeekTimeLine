import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Line from './components/Line/Line'
import YearMarker from './components/YearMarker/YearMarker'
import dummyData from './data/dummyData.json'
import HeadPage from './components/HeadPage/HeadPage'
import LanguageButton from './components/LanguageButton/LanguageButton'

function App() {

  const [invers, setInvers] = useState(true)
  const [language, setLanguage] = useState('fr')


  return (
    <>
      <LanguageButton language={language} setLanguage={setLanguage}/>
      <HeadPage/>
      {
        dummyData.map((slot, key)=>{
          if (slot['type'] == "imgEvent"){
            return (
              <Line inversion={invers} key={key} title={slot.title} imgAlt={slot.imgAlt} imgUrl={slot.imgUrl} textContent={slot.textContent} />
            )
          }
          if (slot['type'] == 'yearMarker'){
            return(
              <YearMarker key={key} year={slot.year}/>
            )
          }
        })
      }
    </>
  )
}

export default App
