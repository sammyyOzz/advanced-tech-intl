import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomeImageCard.css'
import Aos from 'aos';
import "aos/dist/aos.css";

function HomeImageCard({ image, tag, link }) {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="imageCard">
            <div data-aos="flip-right" className="imageCard__box">
                <img src={require(`../images/${image}`)} alt=""/>
            </div>
            <Link to={`/products/${link}`}
            style={{ textDecoration: 'none' }}>
                <h4 data-aos="fade-left" className="imageCard__tag">{tag}</h4>
            </Link>
        </div>
    )
}

export default HomeImageCard
