import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../src/app';


let mongod: MongoMemoryServer;


beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await mongoose.connect(uri);
});


afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
});


it('creates transcription and returns id', async () => {
    const res = await request(app)
    .post('/transcription')
    .send({ audioUrl: 'https://example.com/audio.mp3' })
    .set('Accept', 'application/json');


    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
});

it.each([{},{ audioUrl: 'abc'},{ audioUrl: 'htt:test'}])('creates transcription with invalid body and returns 400 errors', async (mockBody) => {
    const res = await request(app)
    .post('/transcription')
    .send(mockBody)
    .set('Accept', 'application/json');

    expect(res.status).toBe(400);
});

it('creates transcription with invalid url and returns 500 errors', async () => {
      const res  = await request(app)
        .post('/transcription')
        .send({ audioUrl: 'https://download.samplelib.coZ'})
        .set('Accept', 'application/json');
        
        expect(res.status).toBe(500);
    
});