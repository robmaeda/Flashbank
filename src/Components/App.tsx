import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import FlashcardList from "./FlashcardList";
import "../styles.css";
import {
    BrowserRouter,
    NavLink,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import FlashcardGallery from "./FlashcardGallery";
import PracticeCards from "./PracticeCards";
import { FlashcardService, SingleCardProps } from "../util";
import SingleCard from "./SingleCard";

const App = () => {
    const [allCards, setAllCards] = useState<SingleCardProps[]>([]);
    useEffect(() => {
        const getCards = async () => {
            FlashcardService.getCards().then((response) =>
                setAllCards(response.data)
            );
        };
        void getCards();
    }, []);
    const cardsArr = allCards.map((card, index) => (
        <SingleCard key={index} {...card} />
    ));

    return (
        <>
            <h1>Flashbank</h1>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <div className="tabContainer">
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "tab activeTab" : "tab"
                                        }
                                        to="/"
                                    >
                                        Gallery
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "tab activeTab" : "tab"
                                        }
                                        to="/list"
                                    >
                                        List
                                    </NavLink>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive ? "tab activeTab" : "tab"
                                        }
                                        to="/practice"
                                    >
                                        Practice
                                    </NavLink>
                                </div>
                                <Outlet />
                            </>
                        }
                    >
                        <Route
                            index
                            element={<FlashcardGallery cardsArr={cardsArr} />}
                        />
                        <Route
                            path="list"
                            element={
                                <FlashcardList
                                    setAllCards={setAllCards}
                                    allCards={allCards}
                                />
                            }
                        />
                        <Route
                            path="practice"
                            element={<PracticeCards cardsArr={cardsArr} />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
const domNode = document.getElementById("root") as Element;
const root = createRoot(domNode);

root.render(<App />);
