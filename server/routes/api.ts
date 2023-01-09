import express, { Request, Response } from 'express';
import flashcardController from '../controllers/flashcardController';

const router = express.Router();

// Get flashcards
router.get('/', flashcardController.getCards, (req: Request, res: Response): Response => res.status(200).json(res.locals.data));

// Add flashcards
router.post('/card', flashcardController.addCard, (req: Request, res: Response): Response => res.status(200).json(res.locals.data));

// Update card
router.put('/card', flashcardController.updateCard, (req: Request, res: Response): Response => res.status(200).json(res.locals.data));

// Delete card
router.delete('/card', flashcardController.deleteCard, (req: Request, res: Response): Response => res.status(200).json(res.locals.data));

export default router;