import './LanguageButton.css'

import { GrLanguage } from "react-icons/gr";
import { FaAngleUp } from "react-icons/fa";

import { useState } from 'react';

export default function LanguageButton({setLanguage, language}) {
    const [active, setActive] = useState(false)
    return (
        <div className="LanguageButton" >
            {
                active ?
                <FaAngleUp onClick={()=>{setActive(!active)}}/>
                :
                <GrLanguage onClick={()=>{setActive(!active)}}/>
            }
            {
                active ?
                <div className='LanguageButtonChoices'>
                    <div className={language=="fr"? 'LanguageButtonChoice active': 'LanguageButtonChoice' } onClick={()=>{setLanguage("fr")}}>
                        FR
                    </div>
                    <div className={language=="en"? 'LanguageButtonChoice active': 'LanguageButtonChoice' } onClick={()=>{setLanguage("en")}}>
                        EN
                    </div>
                    <div className={language=="nl"? 'LanguageButtonChoice active': 'LanguageButtonChoice' } onClick={()=>{setLanguage("nl")}}>
                        NL
                    </div>
                </div>
                :
                ""

            }
        </div>
    )
}
