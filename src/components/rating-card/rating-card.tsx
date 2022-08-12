import React, { useState } from "react";

import "./rating-card.css";


interface RateType {
    num : number,
    updateRating : (num: number) => void,
    currentRating : number
}


const Rate = ({ num, updateRating, currentRating } : RateType) => {
    const isActive = currentRating === num ? "active" : "";
    return (
        <div className={`rate-number ${isActive}`} onClick={() => updateRating(num)}>
            <span>{num}</span>
        </div>
    )
}

const RatingRow = ({ minRating, maxRating, updateRating, currentRating } : { minRating : number, maxRating : number, updateRating : (num: number) => void, currentRating : number  }) => {
    
    let rates = [], i;

    for(i = minRating; i <= maxRating; i++) {
        rates.push(<Rate key={i} num={i} updateRating={updateRating} currentRating={currentRating}/>);
    }
    
    return <>{rates}</>;
}

interface RatingCardProps {
    heading: string,
    description: string,
    maxRating : number,
    minRating : number,
    onRatingSubmitted : (rate : number) => void
}

const RatingCard = (props: RatingCardProps) => {

    const [rate, setRate] = useState(-1);

    const updateRating = (num: number) => {
        setRate(num);
    }

    const submitRating = () => {
        console.log(rate);
        props.onRatingSubmitted(rate);
    }

    return (
        <div className="rating-card">
            <div className="star">
                <div className="star-icon"></div>
            </div>
            <div className="heading">
                {props.heading}
            </div>
            <div className="description">
                {props.description}
            </div>

            <div className="rating-container">
                <RatingRow currentRating={rate} minRating={props.minRating} maxRating={props.maxRating} updateRating={updateRating}/>
            </div>
            <div className="submit-container">
                <button onClick={() => submitRating()} disabled={rate === -1}>Submit</button>
            </div>
        </div>
        
    )
}

RatingCard.defaultProps = {
    heading : "How did we do?",
    description : "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
    minRating : 1,
    maxRating : 5
}

export default RatingCard;