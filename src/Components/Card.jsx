import React from 'react';
import star from '../img/star.png';

function Card(props) {
    let badgeText;
    if (props.spots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.spots === "ONLINE") {
        badgeText = 'ONLINE';
    } else {
        badgeText = 'FREE';
    }
    return (
        <div className='card-section__block'>
        {badgeText && <div className="card-section__badge">{badgeText}</div>}
        <img className='card-section__img' src={props.img} alt="Katie-Zaferes-picture" />
        <div className='card-section__stats'>
            <img src={star} alt="star-img" />
            <span>
            5.0 
            <span className='card-section__gray'>({props.review}) · </span>
            <span className='card-section__gray'>Usa</span> 
            </span>
            <p className='card-section__text'>{props.title}</p>
            <p className='card-section__text'>
            <span className='card-section__bold'>{props.price} </span>
            <span>person</span>
            </p>
        </div>
    </div>
    )
}

export default Card;