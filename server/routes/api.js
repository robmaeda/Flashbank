const path = require('path');
const express = require('express');

const flashcardController = require('../controllers/flashcardController');

const router = express.Router();

// Get flashcards
router.get('/', flashcardController.getCards, (req, res) => res.status(200).json(res.locals.data));

// Add flashcards
router.post('/card', flashcardController.addCard, (req, res) => res.status(200).json(res.locals.data));

// Update card
router.put('/card', flashcardController.updateCard, (req, res) => res.status(200).json(res.locals.data));

// Delete card
router.delete('/card', flashcardController.deleteCard, (req, res) => res.status(200).json(res.locals.data));

module.exports = router;