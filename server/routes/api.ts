import express, { Request, Response } from "express";
import flashcardController from "../controllers/flashcardController";

const router = express.Router();

// Get flashcards
router.get(
    "/",
    flashcardController.getCards,
    (_req: Request, res: Response): Response =>
        res.status(200).json(res.locals.data)
);

// Add flashcards
router.post(
    "/card",
    flashcardController.addCard,
    (_req: Request, res: Response): Response =>
        res.status(200).json(res.locals.data)
);

// Update card
router.put(
    "/card",
    flashcardController.updateCard,
    (_req: Request, res: Response): Response =>
        res.status(200).json(res.locals.data)
);

// Delete card
router.delete(
    "/card",
    flashcardController.deleteCard,
    (_req: Request, res: Response): Response =>
        res.status(200).json(res.locals.data)
);

export default router;
