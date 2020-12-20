import React from 'react'
import './ProductPageDesc.css'

function ProductPageDesc({ header, text }) {
    return (
        <div className="productDesc">
            <div className="productDesc__content">
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ProductPageDesc
