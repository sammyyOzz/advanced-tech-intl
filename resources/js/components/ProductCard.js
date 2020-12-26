import React from 'react'
import { useHistory } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ name, description, image, link }) {
    const history = useHistory()

    return (
        <div className="productCard">
            <div className="productCard__top">
                <div className="productCard__image">
                    <img src={require(`../images/products/${image}`)} alt=""/>
                </div>
                <div className="productCard__description">
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
            </div>

            <div className="productCard__btn">
                <button onClick={ () => {history.push(`/products/${link}`)}} >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default ProductCard
