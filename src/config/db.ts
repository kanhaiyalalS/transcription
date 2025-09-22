import mongoose from 'mongoose';


const connectDB = async (uri: string) => {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    // Ensure indexes are created
    await mongoose.model('Transcription').ensureIndexes();
};


export default connectDB;