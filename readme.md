## File tree ##
├── docker-compose.yml
├── Dockerfile
├── FILE_TREE.txt
├── jest.config.js
├── package.json
├── package-lock.json
├── readme.md
├── src
│   ├── app.ts
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   │   └── transcription.controller.ts
│   ├── index.ts
│   ├── middleware
│   │   └── validate.ts
│   ├── models
│   │   └── transcription.model.ts
│   ├── routes
│   │   └── transcription.route.ts
│   ├── services
│   │   └── transcription.service.ts
│   ├── types
│   │   └── transcription.d.ts
│   ├── utils
│   │   └── downloader.ts
│   └── validators
│       └── transcription.validator.ts
├── tests
│   └── transcription.test.ts
└── tsconfig.json

## Run
To run:- `docker-compose up --build` <br>
to stop:- `docker-compose down`

## Sample Mp3
`http://samplelib.com/sample-mp3.html`

## use example.com for mock download
eg: https://example.com/sample


## Verify via mongo shell
`docker exec -it <mongo-container-id> mongosh`<br>
`use transcription_db`<br>
`show collections`<br>
`db.transcriptions.find()`<br>
`db.transcriptions.getIndexes()`<br>

## To run without docker
`Update .evn.dev file for mongo url`<br>
`npm run build && npm run start`<br>

## Run test case and coverage
`npm run test`