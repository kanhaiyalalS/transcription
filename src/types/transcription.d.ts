export interface TranscriptionRequestBody {
audioUrl: string;
}


export interface TranscriptionDocument {
_id?: any;
audioUrl: string;
transcription: string;
createdAt: Date;
}