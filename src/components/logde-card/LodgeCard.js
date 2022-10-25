import React from 'react';
import './lodge-card.scss';
import {Link} from "react-router-dom";

const LodgeCard = ({data}) => {
    const {id, title, cover} = data;
    return (
        <Link to={`/lodges/${id}`} key={id} className={"lodge-card"}>
            <img className="lodge-card__cover" src={cover} alt={title}/>
            <div className="lodge-card__content">
                <h2>{title}</h2>
            </div>
        </Link>
    );
};

export default LodgeCard;
