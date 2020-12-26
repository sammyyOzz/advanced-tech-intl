import React from 'react'
import { Link } from 'react-router-dom'
import './HomeImageCard.css'

function HomeImageCard({ image, tag, link }) {
    return (
        <div className="imageCard">
            <div className="imageCard__box">
                <img src={require(`../images/${image}`)} alt=""/>
            </div>
            <Link to={`/products/${link}`}
            style={{ textDecoration: 'none' }}>
                <h4 className="imageCard__tag">{tag}</h4>
            </Link>
        </div>
    )
}

export default HomeImageCard
