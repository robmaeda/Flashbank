import axios from "axios";
export interface SingleCardProps {
    card_id: number;
    front: string;
    definition: string;
}

export interface CardsProps {
    cardsArr: JSX.Element[];
}

export const FlashcardService = {
    getCards: () => axios.get("http://localhost:3000/api/"),
    saveCard: (front: string, definition: string) =>
        axios.post("api/card/", {
            front,
            definition,
        }),
    updateCard: (front: string, definition: string) =>
        axios.put("api/card/", {
            front,
            definition,
        }),
    deleteCard: (front: string) =>
        axios.delete("http://localhost:3000/api/card", {
            data: { front: front },
        }),
};
