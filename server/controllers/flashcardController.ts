import { Request, Response, NextFunction } from "express";

import { query } from "../models/flashcardModels";

interface DatabaseResult {
    rows: string[];
}

const flashcardController = {
    getCards: async (_req: Request, res: Response, next: NextFunction) => {
        const getAllCards = "SELECT * FROM table_2";

        await query(getAllCards).then((dbres: DatabaseResult) => {
            res.locals.data = dbres.rows;
        });
        return next();
    },

    addCard: async (req: Request, res: Response, next: NextFunction) => {
        const insert = `INSERT INTO table_2 (front, definition)
        VALUES ('${req.body.front}', '${req.body.definition}');`;

        await query(insert);

        const getAllCards = "SELECT * FROM table_2";

        await query(getAllCards).then((dbres: DatabaseResult) => {
            res.locals.data = dbres.rows;
        });
        return next();
    },

    updateCard: async (req: Request, res: Response, next: NextFunction) => {
        const update = `UPDATE table_2
        SET definition = '${req.body.definition}'
        WHERE front = '${req.body.front}'`;

        await query(update);

        const getAllCards = "SELECT * FROM table_2";

        await query(getAllCards).then((dbres: DatabaseResult) => {
            res.locals.data = dbres.rows;
        });
        return next();
    },

    deleteCard: async (req: Request, res: Response, next: NextFunction) => {
        const deleteQuery = `DELETE FROM table_2 WHERE card_id ='${req.body.front}'`;

        await query(deleteQuery);

        const getAllCards = "SELECT * FROM table_2";

        await query(getAllCards).then((dbres: DatabaseResult) => {
            res.locals.data = dbres.rows;
        });
        return next();
    },
};

export default flashcardController;
