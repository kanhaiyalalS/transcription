import { Request, Response, NextFunction } from 'express';
import { TranscriptionRequestBody } from '../types/transcription.d';
import { transcribeAndSave } from '../services/transcription.service';


export async function createTranscription(req: Request, res: Response, next: NextFunction) {
    try {
        const body = req.body as TranscriptionRequestBody;
        if (!body || !body.audioUrl) {
            return res.status(400).json({ message: 'audioUrl is required' });
        }

        const saved = await transcribeAndSave(body.audioUrl);
        return res.status(201).json({ id: saved._id });
    } catch (err) {
        next(err);
    }
}