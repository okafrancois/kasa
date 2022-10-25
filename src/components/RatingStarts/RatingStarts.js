import React from 'react';
import './rating-starts.scss';

const RatingStarts = ({rating}) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(<div key={`item-${i}`} className={`rating-starts__item ${i <= rating ? '--active' : ''}`}>
            <svg viewBox="0 0 36 36" fill="none">
                <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="currentColor"/>
            </svg>
        </div>)
    }

    return (
        <div className={"rating-starts"}>
            {stars.map((star) => star)}
        </div>

    );
};

export default RatingStarts;
