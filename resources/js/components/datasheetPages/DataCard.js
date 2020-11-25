import React from 'react'
import './DataCard.css'

function DataCard({ image, title, text, textList, longText, li }) {
    return (
        <div className="dataCard">
            <div className="dataCard__top">
                <div className="dataCard__image">
                    <img src={require(`../../images/${image}`)} alt=""/>
                </div>
                <div className="dataCard__description">
                    <h3>{title}</h3>
                    { text && <p>{text}</p> }
                    { textList && <ul>{textList.map(item => <li>{item}</li>)}</ul> }
                </div>
            </div>

            {
                (longText && li) &&
                <div className="dataCard__longText">
                    <p>{longText}</p>
                    <ul>
                        { li.map(item => <li>{item}</li> ) }
                    </ul>
                </div>
            }

            <div className="dataCard__btn">
                <button>Datasheet</button>
            </div>
        </div>
    )
}

export default DataCard
