const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    let filePath;

    switch (request.url) {
        case '/about':
            console.log('User requested about page');
            response.end('About page'); 
            break;
        case '/contact':
            console.log('User requested contact page');
            response.end('Contact page');
            break;
        case '/products':
            console.log('User requested products page');
            response.end('Products page');
            break;
        case '/subscribe':
            console.log('User requested subscribe page');
            response.end('Subscribe page');
            break;
        case '/social':
            console.log('User requested social page');
            response.end('Social page');
            break;
        case '/':
            console.log('User requested home page');
            response.end('Home page');
            break;
        default:
            console.log('User requested home page');
            response.end('Home page');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});