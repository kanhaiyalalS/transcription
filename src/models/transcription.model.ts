import mongoose from 'mongoose';


const transcriptionSchema = new mongoose.Schema({
audioUrl: { type: String, required: true, unique: true },
transcription: { type: String, required: true },
createdAt: { type: Date, default: () => new Date() }
});

// Create index explicitly (optional, but good practice)
transcriptionSchema.index({ audioUrl: 1 }, { unique: true });

const Transcription = mongoose.model('Transcription', transcriptionSchema);
export default Transcription;