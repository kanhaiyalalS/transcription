import Transcription from '../models/transcription.model';
import { downloadAudio } from '../utils/downloader';
import { TranscriptionDocument } from '../types/transcription.d';


export async function transcribeAndSave(audioUrl: string): Promise<TranscriptionDocument> {
    // Check if already exists
    let existing = await Transcription.findOne({ audioUrl }).lean();
    if (existing) {
        console.log('Existing transcription found for URL:', existing);
        return existing;
    }

    // read retry settings from env
    const retries = Number(process.env.DOWNLOAD_RETRY || 3);
    const delay = Number(process.env.DOWNLOAD_RETRY_DELAY_MS || 500);

    // Attempt download (mocked for example.com)
    const buffer = await downloadAudio(audioUrl, retries, delay);

    // Dummy transcription step but we can use buffer if needed later
    const transcriptionText = 'transcribed text';

    // Save to MongoDB
    const doc = await Transcription.create({ audioUrl, transcription: transcriptionText, createdAt: new Date() });

    return doc.toObject();
}