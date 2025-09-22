## File tree ##
tree -I "node_modules|.git"

## Run
To run:- `docker-compose up --build`
to stop:- `docker-compose down`

## Sample Mp3
`http://samplelib.com/sample-mp3.html`

## use example.com for mock download
eg: https://example.com/sample


## Verify via mongo shell
`docker exec -it <mongo-container-id> mongosh`
`use transcription_db`
`show collections`
`db.transcriptions.find()`
`db.transcriptions.getIndexes()`

## To run without docker
`Update .evn.dev file for mongo url`
`npm run build && npm run start`

## Run test case and coverage
`npm run test`