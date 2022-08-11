require('dotenv').config();
const Server = require('./utils/server')

const server = new Server();

server.execute();