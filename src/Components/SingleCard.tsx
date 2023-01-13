import React, { useState } from "react";

export interface SingleCardProps {
    card_id: number;
    front: string;
    definition: string;
}

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
                <h2 className="text">Word/Term: {front}</h2>
            </div>
            <div className="back">
                <h2 className="text">Translation: {definition}</h2>
            </div>
        </div>
    );
};

export default SingleCard;
