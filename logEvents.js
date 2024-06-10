// installed npm packages


// common modules
const fs = require('fs');
const http = require('http');
const url = require('url');
const EventEmitter = require('events');

// Classes extended from EventEmitter
class StatusEmitter extends EventEmitter {}
class FileEmitter extends EventEmitter {}

// -------------------------------------------------------------------------- //
// Scenario: capturing status codes
const statusEmitter = new StatusEmitter();

statusEmitter.on('200', () => {
  console.log('200: Success');
});

statusEmitter.on('404', () => {
  console.log('404: Not Found');
});

statusEmitter.on('500', () => {
  console.log('500: Internal Server Error');
});
function emitStatusCodeEvent(statusCode) {
  statusEmitter.emit(String(statusCode));
}
// Emitting status codes
emitStatusCodeEvent(200);
emitStatusCodeEvent(404);
emitStatusCodeEvent(500);

// -------------------------------------------------------------------------- //
// Scenario: for every event that is not the home page, log the route
const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;

  if (path !== '/') {
    console.log(`Route ${path} was accessed.`);
  }

  res.end(`You've accessed ${path}`);
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// -------------------------------------------------------------------------- //
// Scenario: Every time a file is successfully read, log the file name
const fileEmitter = new FileEmitter();

fileEmitter.on('fileRead', (file) => {
  console.log(`File ${file} was successfully read.`);
});

function readFileAndEmitEvent(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filename}:`, err);
      return;
    }

    fileEmitter.emit('fileRead', filename);
  });
}

readFileAndEmitEvent('example.txt');

