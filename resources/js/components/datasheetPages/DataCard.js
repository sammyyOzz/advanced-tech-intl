import React from 'react'
import { Link } from 'react-router-dom'
import './DataCard.css'

function DataCard({ image, title, text, textList, longText, li, file }) {

    const pdf = image.substring(0, image.lastIndexOf('.') + 1);

    return (
        <div className="dataCard">
            <div className="dataCard__top">
                <div className="dataCard__image">
                    <img src={require(`../../images/${image}`)} alt="" />
                </div>
                <div className="dataCard__description">
                    <h3>{title}</h3>
                    { text && <p>{text}</p> }
                    { textList && <ul>{textList.map((item, index) => <li key={index}>{item}</li>)}</ul> }
                </div>
            </div>

            {
                (longText && li) &&
                <div className="dataCard__longText">
                    <p>{longText}</p>
                    <ul>
                        { li.map((item, index) => <li key={index}>{item}</li> ) }
                    </ul>
                </div>
            }

            <div className="dataCard__btn">
                {
                    <Link to={ file ? `/pdfs/${file}` : `/pdfs/${pdf}pdf` } target="_blank" download>
                        <button className="cardBtn">Datasheet</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default DataCard
