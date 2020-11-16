import React from 'react'
import './HomeTopCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'


function HomeTopCard({ caption, text }) {
    return (
        <div className="card">
            <div className="card__icon">
                <h1><FontAwesomeIcon icon={faRocket} /></h1>
            </div>

            <h3>{caption}</h3>
            <p>{text}</p>
        </div>
    )
}

export default HomeTopCard
