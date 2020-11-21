import React from 'react'
import './ProductCard.css'

function ProductCard({ name, description, image }) {
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
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default ProductCard
