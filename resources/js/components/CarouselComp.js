import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './CarouselComp.css'

export default function CarouselComp({ animate, short, images, time, showIndicator })
{
    return (
        <Carousel
            animation={animate}
            interval={time}
            indicators={ showIndicator ? true : false }
        >
            {
                images.map((image, i) => {
                    return (
                        <img
                            key={i}
                            className={ !short ? "carousel__img" : "carousel__short"}
                            src={require(`../images/carousel/${image}`)}
                            alt=""
                        />
                    )
                })
            }
        </Carousel>
    )
}
