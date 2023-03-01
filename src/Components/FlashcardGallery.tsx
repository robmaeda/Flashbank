import React from "react";
import { CardsProps } from "../util";

const FlashcardGallery = ({ cardsArr }: CardsProps) => {
    return cardsArr.length === 0 ? (
        <div>You have not created any cards. Go to List to create cards!</div>
    ) : (
        <div className="cardsDisplay">{cardsArr}</div>
    );
};

export default FlashcardGallery;
