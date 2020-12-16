import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './CarouselComp.css'

export default function CarouselComp(props)
{
    const items = [
        "book-4126483_1920-1.jpg",
        "military-jet-flight-flying-1245256.jpg"
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} image={item} /> )
            }
        </Carousel>
    )
}

function Item({ image })
{
    return (
        <img
            className="carousel__img"
            src={require(`../images/carousel/${image}`)}
            alt=""
        />
    )
}
