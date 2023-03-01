import React, { useState } from "react";
import { SingleCardProps } from "../util";

const SingleCard = ({
    front,
    definition,
    card_id: cardId,
}: SingleCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => {
        setIsFlipped((flipped) => !flipped);
    };

    return (
        <div
            className={`singleCard ${isFlipped ? "flipped" : ""}`}
            onClick={flipCard}
            id={cardId.toString()}
        >
            <div className="front">
                <h2 className="text">{front}</h2>
            </div>
            <div className="back">
                <h2 className="text">{definition}</h2>
            </div>
        </div>
    );
};

export default SingleCard;
