
import { Request, Response, NextFunction, RouterOptions } from 'express';

const db = require('../models/flashcardModels');

const flashcardController = {

  getCards: async (req: Request, res: Response, next: NextFunction) => {
    const getAllCards = 'SELECT * FROM table_2';

    await db.query(getAllCards).then((dbres: { rows: string; }) => { res.locals.data = dbres.rows; });
    return next();
  },

  addCard: async (req: Request, res: Response, next: NextFunction) => {
    const query = `INSERT INTO table_2 (front, definition)
    VALUES ('${req.body.front}', '${req.body.definition}');`;

    await db.query(query);

    const getAllCards = 'SELECT * FROM table_2';

    await db.query(getAllCards).then((dbres: { rows: string; }) => { 
      res.locals.data = dbres.rows; });
    return next();
  },

  updateCard: async (req: Request, res: Response, next: NextFunction) => {
    const query = `UPDATE table_2
    SET definition = '${req.body.definition}'
    WHERE front = '${req.body.front}'`;

    await db.query(query);

    const getAllCards = 'SELECT * FROM table_2';

    await db.query(getAllCards).then((dbres: { rows: string; }) => { res.locals.data = dbres.rows; });
    return next();
  },

  deleteCard: async (req: Request, res: Response, next: NextFunction) => {
    const query = `DELETE FROM table_2 
    WHERE front ='${req.body.front}'`;

    await db.query(query);

    const getAllCards = 'SELECT * FROM table_2';

    await db.query(getAllCards).then((dbres: { rows: string; }) => { res.locals.data = dbres.rows; });
    return next();
  }
}
export default flashcardController;