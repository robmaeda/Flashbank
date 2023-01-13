import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SingleCard, { SingleCardProps } from "./SingleCard";

interface CreateFlashcardRequest {
    front: string;
    definition: string;
}

const CreateFlashcard = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateFlashcardRequest>();
    const {
        register: register2,
        handleSubmit: handleSubmit2,
        reset: reset2,
        formState: { errors: errors2 },
    } = useForm();
    const {
        register: register3,
        handleSubmit: handleSubmit3,
        reset: reset3,
        formState: { errors: errors3 },
    } = useForm();

    const [allCards, setAllCards] = useState<SingleCardProps[]>([]);

    const firstLoad = () => {
        fetch("http://localhost:3000/api/", {
            method: "GET",
            headers: {
                "Content-Type": "Application/JSON",
            },
        })
            .then(async (res) => await res.json())
            .then((data) => {
                console.log(data);
                setAllCards(data);
            });
    };

    const saveCard = (data: Record<string, string>) => {
        fetch("http://localhost:3000/api/card", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify({
                front: data.front,
                definition: data.definition,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setAllCards(data);
            });
        reset();
    };

    const updateCard = (data: Record<string, string>) => {
        fetch("http://localhost:3000/api/card", {
            method: "PUT",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify({
                front: data.updateFront,
                definition: data.updateDefinition,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllCards(data);
            });
        reset2();
    };

    const deleteCard = (data: Record<string, string>) => {
        fetch("http://localhost:3000/api/card", {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify({
                front: data.deleteFront,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setAllCards(data);
            });
        reset3();
    };

    const cardsArr: JSX.Element[] = [];
    for (let i = 0; i < allCards.length; i++) {
        cardsArr.push(<SingleCard key={i} {...allCards[i]} />);
    }

    useEffect(() => {
        firstLoad();
    }, []);

    return (
        <div className="cfc">
            <div className="title">
                <h1>Flashbank</h1>
            </div>

            <form className="addEntry" onSubmit={() => handleSubmit(saveCard)}>
                <h2>Add Words/Terms</h2>
                <input
                    placeholder="Enter your Word/Term here..."
                    {...register("front", { required: true })}
                />
                {errors.front != null && <a>Term is required</a>}
                <input
                    placeholder="Translation"
                    {...register("definition", { required: true })}
                />
                {errors.definition != null && <a>Definition is required</a>}
                <input type="submit" />
            </form>

            <form
                className="updateEntry"
                onSubmit={() => handleSubmit2(updateCard)}
            >
                <h2>Update Words/Terms</h2>
                <input
                    placeholder="Word/Term to be updated..."
                    {...register2("front", { required: true })}
                />
                {errors2.front != null && <a>Term is required</a>}
                <input
                    placeholder="New Translation"
                    {...register2("definition", { required: true })}
                />
                {errors2.definition != null && <a>Definition is required</a>}
                <input type="submit" value="Update" />
            </form>

            <div className="cardsDisplay">{cardsArr}</div>

            <form
                className="deleteEntry"
                onSubmit={() => handleSubmit3(deleteCard)}
            >
                <h2>Delete Words/Terms</h2>
                <input
                    placeholder="Word/Term to be deleted..."
                    {...register3("front", { required: true })}
                />
                {errors3.front != null && <a>Term is required</a>}
                <input type="submit" value="Delete" />
            </form>
        </div>
    );
};

export default CreateFlashcard;
