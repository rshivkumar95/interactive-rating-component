import React from "react";

import "./rating-response.css";

const RatingResponse = ( { rate, maxRating } : { rate : number, maxRating : number }) => {
    return (
        <div className="response-container">
            <div className="thank-you-image"></div>
            <div className="rating-submitted">
                You selected {rate} out of {maxRating}
            </div>
            <div className="heading">
                Thank you!
            </div>
            <div className="description">
                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </div>
        </div>
    )
}

export default RatingResponse; 