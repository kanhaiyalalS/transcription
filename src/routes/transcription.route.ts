import { Router } from 'express';
import { createTranscription } from '../controllers/transcription.controller';
import { validate } from '../middleware/validate';
import { transcriptionSchema } from '../validators/transcription.validator';


const router = Router();


router.post('/', validate(transcriptionSchema) ,createTranscription);


export default router;