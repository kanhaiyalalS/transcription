## File tree ##
├── docker-compose.yml<br>
├── Dockerfile<br>
├── jest.config.js<br>
├── package.json<br>
├── package-lock.json<br>
├── readme.md<br>
├── src<br>
│   ├── app.ts<br>
│   ├── config<br>
│   │   └── db.ts<br>
│   ├── controllers<br>
│   │   └── transcription.controller.ts<br>
│   ├── index.ts<br>
│   ├── middleware<br>
│   │   └── validate.ts<br>
│   ├── models<br>
│   │   └── transcription.model.ts<br>
│   ├── routes<br>
│   │   └── transcription.route.ts<br>
│   ├── services<br>
│   │   └── transcription.service.ts<br>
│   ├── types<br>
│   │   └── transcription.d.ts<br>
│   ├── utils<br>
│   │   └── downloader.ts<br>
│   └── validators<br>
│       └── transcription.validator.ts<br>
├── tests<br>
│   └── transcription.test.ts<br>
└── tsconfig.json<br>


## Run via docker-compose
To run:- `docker-compose up --build` <br>
to stop:- `docker-compose down`

## Sample Mp3
`http://samplelib.com/sample-mp3.html`

## use example.com to mock download
eg: https://example.com/sample


## Verify via mongo shell
`docker exec -it <mongo-container-id> mongosh`<br>
`use transcription_db`<br>
`show collections`<br>
`db.transcriptions.find()`<br>
`db.transcriptions.getIndexes()`<br>

## To run without docker 

### Update .evn.dev file for mongo url<br>
`PORT=3000`<br>
`MONGO_URI=mongodb://mongo:27017/transcription_db`<br>
`DOWNLOAD_RETRY=3`<br>
`DOWNLOAD_RETRY_DELAY_MS=500`<br>
`MAXSIZEMB=2`<br>

`npm run build && npm run start`<br>

## Run test case and coverage
`npm run test`