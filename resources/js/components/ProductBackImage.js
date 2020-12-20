import React from 'react'
import './ProductBackImage.css'

function ProductBackImage({ plane, title }) {
    return (
        <div className={ plane ? "productBackImage__II" : "productBackImage" }>
            <div className="productBackImage__overlay">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default ProductBackImage
