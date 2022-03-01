const db = require('../models/flashcardModels');

const flashcardController = {};

flashcardController.getCards = async(req, res, next) => {
  const getAllCards = 'SELECT * FROM table_2';

  await db.query(getAllCards).then((dbres) => {res.locals.data = dbres.rows});
  return next();
}

flashcardController.addCard = async(req, res, next) => {
  const query = `INSERT INTO table_2 (front, definition)
  VALUES ('${req.body.front}', '${req.body.definition}');`;

  await db.query(query);

  const getAllCards = 'SELECT * FROM table_2';

  await db.query(getAllCards).then((dbres) => {res.locals.data = dbres.rows});
  return next();  
}

flashcardController.updateCard = async(req, res, next) => {
  const query = `UPDATE table_2
  SET definition = '${req.body.definition}'
  WHERE front = '${req.body.front}'`

  await db.query(query);

  const getAllCards = 'SELECT * FROM table_2';

  await db.query(getAllCards).then((dbres) => {res.locals.data = dbres.rows});
  return next();
}

flashcardController.deleteCard = async(req, res, next) => {
  const query = `DELETE FROM table_2 
  WHERE front ='${req.body.front}'`

  await db.query(query);

  const getAllCards = 'SELECT * FROM table_2';

  await db.query(getAllCards).then((dbres) => {res.locals.data = dbres.rows});
  return next();
}

module.exports = flashcardController;