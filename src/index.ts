import dotenv from 'dotenv';
dotenv.config({ path: './.env.dev' });


import app from './app';
import connectDB from './config/db';


const PORT = process.env.PORT || 3000;


connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/transcription_db')
.then(() => {
app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);
});
})
.catch((err) => {
console.error('Failed to connect to MongoDB', err);
process.exit(1);
});