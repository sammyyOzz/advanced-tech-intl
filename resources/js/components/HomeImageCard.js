import React from 'react'
import './HomeImageCard.css'

function HomeImageCard({ image, tag }) {
    return (
        <div className="imageCard">
            <div className="imageCard__box">
                <img src={require(`../images/${image}`)} alt=""/>
            </div>
            <h4 className="imageCard__tag">{tag}</h4>
        </div>
    )
}

export default HomeImageCard
