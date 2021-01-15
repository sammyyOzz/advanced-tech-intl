import React, { useEffect } from 'react'
import './HomeTopCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import Aos from 'aos';
import "aos/dist/aos.css";


function HomeTopCard({ caption, text, mobileHide }) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div data-aos="fade-up" className={ ! mobileHide ? "card" : "card__mobileHide"}>
            <div className="card__icon">
                <h1><FontAwesomeIcon icon={faRocket} /></h1>
            </div>

            <h3>{caption}</h3>
            <p>{text}</p>
        </div>
    )
}

export default HomeTopCard
