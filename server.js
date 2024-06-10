const http = require('http');
const fs = require('fs');
const path = require('path');

const route = require('./routes');

global.DEBUG = true;
const server = http.createServer((request, response) => {
    if (DEBUG) 
    console.log('Request URL:', request.url);
    let path = './views/';
    switch (request.url) {
        case '/':
            console.log('User requested home page');
            path += 'index.html';
            if (DEBUG) console.log('Path:', path);
            route.indexPage(path, response);
            break;
        case '/about':
            console.log('User requested about page');
            path += 'about.html';
            if (DEBUG) console.log('Path:', path);
            route.aboutPage(path, response); 
            break;
        case '/contact':
            console.log('User requested contact page');
            path += 'contact.html';
            if (DEBUG) console.log('Path:', path);
            route.contactPage(path, response);
            break;
        case '/products':
            console.log('User requested products page');
            path += 'products.html';
            if (DEBUG) console.log('Path:', path);
            route.productsPage(path, response);
            break;
        case '/subscribe':
            console.log('User requested subscribe page');
            path += 'subscribe.html';
            if (DEBUG) console.log('Path:', path);
            route.subscribePage(path, response);
            break;
        case '/social':
            console.log('User requested social page');
            path += 'social.html';
            if (DEBUG) console.log('Path:', path);
            route.socialPage(path, response);
            break;
        default:
            if (DEBUG) console.log('Error 404 - User requested an invalid page');
            response.end('404 Page Not Found');
    }
});



const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});