const http = require('http');
//In Frontend, we are used to: import {something} from '..'. However, in NodeJs, we use require.

const app = require('./app');

const port = process.env.PORT || 3000;
/*Most hosting services provise us with environment variables to be injected into our NodeJs project, so we
simply use process.env.PORt. If this is not available, we'll use 3000 as the port number.*/

const server = http.createServer(app);

server.listen(port);