import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FlashcardService, SingleCardProps } from "../util";

interface ListCardProps extends SingleCardProps {
    setAllCards: (allCards: SingleCardProps[]) => void;
}

const ListCard = ({
    front,
    definition,
    card_id: cardId,
    setAllCards,
}: ListCardProps) => {
    const [showEdit, setShowEdit] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const updateCard = (data: Record<string, string>) => {
        FlashcardService.updateCard(
            cardId.toString(),
            data.updateFront,
            data.updateDefinition
        ).then((response) => setAllCards(response.data));
        reset();
        setShowEdit(false);
    };

    const deleteCard = (id: string) => {
        FlashcardService.deleteCard(id).then((response) =>
            setAllCards(response.data)
        );
    };

    return (
        <form className="updateEntry" onSubmit={handleSubmit(updateCard)}>
            <div className="listCard">
                <div className="listCardTerm">
                    <div className="listInput">
                        Front:{" "}
                        {showEdit ? (
                            <>
                                <input
                                    className="editInput"
                                    placeholder="New Word/Term"
                                    {...register("updateFront", {
                                        required: true,
                                    })}
                                />
                                {errors.updateFront != null && (
                                    <div className="message">
                                        Term is required
                                    </div>
                                )}
                            </>
                        ) : (
                            front
                        )}
                    </div>
                    <div className="listInput">
                        Definition:
                        {showEdit ? (
                            <>
                                <input
                                    className="editInput"
                                    placeholder="New Translation"
                                    {...register("updateDefinition", {
                                        required: true,
                                    })}
                                />
                                {errors.updateDefinition != null && (
                                    <div className="message">
                                        Definition is required
                                    </div>
                                )}
                            </>
                        ) : (
                            definition
                        )}
                    </div>
                </div>
                <div>
                    {showEdit ? (
                        <>
                            <input
                                className="submitButton"
                                type="submit"
                                value="Update"
                            />
                            <button onClick={() => setShowEdit(false)}>
                                Cancel
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => setShowEdit(true)}>
                                Edit
                            </button>
                            <button
                                onClick={() => deleteCard(cardId.toString())}
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </div>
        </form>
    );
};

export default ListCard;
