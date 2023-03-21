import React from "react";
import { useForm } from "react-hook-form";
import { FlashcardService, SingleCardProps } from "../util";
import ListCard from "../Components/ListCard";

interface FlashcardListProps {
    allCards: SingleCardProps[];
    setAllCards: (allCards: SingleCardProps[]) => void;
}

const FlashcardList = ({ allCards, setAllCards }: FlashcardListProps) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const saveCard = (data: Record<string, string>) => {
        FlashcardService.saveCard(data.front, data.definition).then(
            (response) => setAllCards(response.data)
        );
        reset();
    };

    const listCards = allCards.map((card, index) => (
        <ListCard key={index} {...card} setAllCards={setAllCards} />
    ));

    return (
        <div className="cfc">
            <h2>Add Words/Terms</h2>
            <form className="addEntry" onSubmit={handleSubmit(saveCard)}>
                <div className="inputWrapper">
                    <input
                        className="input"
                        placeholder="Enter your Word/Term here..."
                        {...register("front", { required: true })}
                    />
                    {errors.front != null && <div>Term is required</div>}
                    <input
                        className="input"
                        placeholder="Translation"
                        {...register("definition", { required: true })}
                    />
                    {errors.definition != null && (
                        <div>Definition is required</div>
                    )}
                    <input className="submitButton" type="submit" />
                </div>
            </form>
            {listCards}
        </div>
    );
};

export default FlashcardList;
