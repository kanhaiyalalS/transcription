import express from 'express';
import cors from 'cors';
import transcriptionRouter from './routes/transcription.route';


const app = express();
app.use(cors());
app.use(express.json());


app.use('/transcription', transcriptionRouter);


app.use((err: any, _req: express.Request, res: express.Response, _next: any) => {
console.error(err);
res.status(err.status || 500).json({ message:'Something went wrong. Please try again later.' });
});


export default app;